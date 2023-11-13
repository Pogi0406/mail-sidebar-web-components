class AppSidebarButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.text = this.getAttribute("text");
    this.unreadCount = this.getAttribute("unreadCount");
    this.icon = this.innerHTML.trim();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .sidebar__option {
          padding-left: 1.7rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-top-right-radius: 1.3rem;
          border-bottom-right-radius: 1.3rem;
          cursor: pointer;
        }

        .sidebar__option .text {
          margin-left: 1rem;
          font-weight: bold;
        }

        .unread-count {
          color: #5F6367;
          margin-left: 6rem;
        }

        .sidebar__option:hover:not(.active) {
          background-color: #eaeaed;
        }
      </style>
      <div class="sidebar__option">
        <slot name="icon"></slot>
        <span class="text">${this.text}</span>
        ${
          this.unreadCount > 0
            ? `<span class="unread-count">${this.unreadCount}</span>`
            : ""
        }
      </div>
    `;
  }
}

customElements.define("app-sidebar-button", AppSidebarButton);
