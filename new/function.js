class AnnouncementBar extends HTMLElement {
    constructor() {
      super();
      this.currentScrollTop = 0;
      this.updateAnnouncementHeight();
      this.updateDynamicAnnouncementHeight();
      window.addEventListener(
        "scroll",
        this.updateDynamicAnnouncementHeight.bind(this),
        false
      );

      const resizeObserver = new ResizeObserver(
        this.updateDynamicAnnouncementHeight.bind(this)
      );
      resizeObserver.observe(
        this.closest("[data-announcement-wrapper]")
      );
    }

    updateAnnouncementHeight() {
      const announcementWrapper = this.closest(
        "[data-announcement-wrapper]"
      );
      if (announcementWrapper) {
        const announcementBarHeight = announcementWrapper.offsetHeight;
        document.body.style.setProperty(
          "--announcement_height",
          `${announcementBarHeight}px`
        );
      }
    }

    updateDynamicAnnouncementHeight() {
      const announcementWrapper = this.closest(
        "[data-announcement-wrapper]"
      );
      if (announcementWrapper) {
        const announcementBarHeight = announcementWrapper.offsetHeight;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        const dynamicHeight =
          scrollTop > announcementBarHeight
            ? 0
            : Math.max(announcementBarHeight - scrollTop, 0);
        document.body.style.setProperty(
          "--dynamic_announcement_height",
          `${dynamicHeight}px`
        );

        this.currentScrollTop = scrollTop;
      }
    }
  }

  customElements.define("announcement-bar", AnnouncementBar);

  class AccountEvent extends HTMLElement {
    constructor() {
      super();
      this.addEventListener(
        "click",
        this.initialize.bind(this)
      );
      this.data_close_drawer = this.closest(
        '[data-drawer="account-drawer"]'
      ).querySelector("[data-drawer-close]");
    }

    initialize(e) {
      const accountDrawer = this.closest("account-drawer");
      if (!accountDrawer) return;
      e.preventDefault();
      const { target } = this.dataset;
      // Select all items and target elements at once to minimize DOM queries
      const allFormsAndHeadings =
        accountDrawer.querySelectorAll(
          "[data-form], [data-heading]"
        );
      const targetForm = accountDrawer.querySelector(
        `[data-form="${target}"]`
      );
      const targetHeading = accountDrawer.querySelector(
        `[data-heading="${target}"]`
      );

      // Hide all forms and headings, remove 'active' class
      allFormsAndHeadings.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("active");
      });

      // Show and activate the target elements if they exist
      if (targetForm) {
        console.log("check button click");
        targetForm.classList.remove("hidden");
        targetForm.classList.add("active");
        console.log(
          "data_close_drawer",
          this.data_close_drawer
        );
        this.data_close_drawer.focus();
      }

      if (targetHeading) {
        targetHeading.classList.remove("hidden");
        targetHeading.classList.add("active");
      }
    }
  }

  customElements.define("account-event", AccountEvent);