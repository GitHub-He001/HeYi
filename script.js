function mainData() {
  return {
    showTopDropDown: false,
    showSearch: false,
    searchQuery: "",
    selectedCategory: null,
    posts: [
      {
        id: 1,
        title: "传承红色基因，弘扬爱国精神",
        category: 1,
        date: "2024年3月21日星期四",
        coverImage: "./imgages/post1.jpg",
      },
      {
        id: 2,
        title: "使用 docker-compose 搭建 pgAdmin 服务",
        category: 2,
        date: "2023年9月27日星期三",
        coverImage: "./imgages/post2.jpg",
      },
      {
        id: 3,
        title: "从 RDS 到 Docker Compose 自建 Postgres 数据库",
        category: 2,
        date: "2023年9月27日星期三",
        coverImage: "./imgages/post3.jpg",
      },
      {
        id: 4,
        title: "Notion をやめました",
        category: 1,
        date: "2023年9月6日星期三",
        coverImage: "./imgages/post4.jpg",
      },
      {
        id: 5,
        title: "Google Domainは死んだ",
        category: 2,
        date: "2023年9月6日星期三",
        coverImage: "./imgages/post5.jpg",
      },
      {
        id: 6,
        title: "初めて携帯を修理した",
        category: 1,
        date: "2023年9月6日星期三",
        coverImage: "./imgages/post6.jpg",
      },
      {
        id: 7,
        title: "更新了 macOS Sonoma后真真切切的解决了我使用上的痛点",
        category: 1,
        date: "2023年8月11日星期五",
        coverImage: "./imgages/post7.jpg",
      },
      {
        id: 8,
        title: "由最近看到的各种手游停服公告引发的思考",
        category: 1,
        date: "2023年8月6日星期日",
        coverImage: "./imgages/post8.jpg",
      },
      {
        id: 9,
        title: "相比罗技的MX Master系列显得毫无握持感的Magic Mouse还挺好用的",
        category: 1,
        date: "2023年7月19日星期三",
        coverImage: "./imgages/post9.jpg",
      },
      {
        id: 10,
        title: "我最后还是放弃了使用纯文本记录密码",
        category: 2,
        date: "2023年7月19日星期三",
        coverImage: "./imgages/post10.jpg",
      },
      {
        id: 11,
        title: "AirTag第二次救了我",
        category: 1,
        date: "2023年7月17日星期一",
        coverImage: "./imgages/post11.jpg",
      },
    ],
    categories: [
      { id: 1, name: "爱国情怀" },
      { id: 2, name: "计算机编程" },
      { id: 3, name: "游戏" },
      { id: 4, name: "macOS" },
      { id: 5, name: "DevOps" },
      { id: 6, name: "OAuth" },
      { id: 7, name: ".NET" },
      { id: 8, name: "日常" },
    ],

    init() {
      // 直接渲染文章，不再重新赋值 posts
      this.renderPosts();

      // 监听点击事件关闭下拉菜单
      document.addEventListener("click", (e) => {
        if (!e.target.closest("[data-dropdown-toggle]")) {
          this.showTopDropDown = false;
        }
      });
    },

    createPostCard(post, index) {
      const category = this.categories.find((c) => c.id === post.category);
      const defaultImage =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";

      const imageHtml = `
        <div class="relative overflow-hidden w-full h-full">
          <div class="image-placeholder absolute inset-0"></div>
          <img src="${post.coverImage}" 
               alt="${post.title}" 
               class="post-image relative z-10"
               onerror="this.onerror=null; this.src='${defaultImage}'; this.classList.add('error-image')"
               onload="this.previousElementSibling.style.display='none'"
          >
        </div>
      `;

      if (index === 0) {
        // 大卡片布局 - 降低高度
        return `
          <a href="./post.html?id=${post.id}" class="post-card col-span-6 bg-white rounded-xl flex flex-col sm:flex-row overflow-hidden group cursor-pointer">
            <div class="sm:w-[340px] lg:w-[643px] aspect-[16/9] sm:aspect-[16/9]">
              ${imageHtml}
            </div>
            <div class="p-[20px] lg:p-[24px] flex flex-col justify-between grow">
              <div>
                <p class="text-xs font-medium text-gray-600">${category.name}</p>
                <h3 class="text-md sm:text-lg lg:text-2xl font-black sm:font-bold lg:font-semibold mt-2">${post.title}</h3>
              </div>
              <p class="text-sm font-medium text-gray-500 mt-2">${post.date}</p>
            </div>
          </a>
        `;
      }

      if (index >= 1 && index <= 4) {
        // 中等卡片布局 - 4:3 比例
        return `
          <a href="./post.html?id=${post.id}" class="post-card col-span-6 sm:col-span-3 bg-white rounded-xl flex flex-col overflow-hidden group cursor-pointer">
            <div class="aspect-[4/3]">
              ${imageHtml}
            </div>
            <div class="p-[24px] lg:p-[32px] flex flex-col justify-between grow">
              <div>
                <p class="text-xs font-medium text-gray-600">${category.name}</p>
                <h3 class="text-md sm:text-lg lg:text-2xl font-black sm:font-bold lg:font-semibold mt-2">${post.title}</h3>
              </div>
              <p class="text-sm font-medium text-gray-500 mt-2">${post.date}</p>
            </div>
          </a>
        `;
      }

      // 小卡片布局 - 3:2 比例
      return `
        <a href="./post.html?id=${post.id}" class="post-card col-span-6 sm:col-span-3 lg:col-span-2 bg-white rounded-xl flex flex-col overflow-hidden group cursor-pointer">
          <div class="aspect-[3/2]">
            ${imageHtml}
          </div>
          <div class="p-5 pl-7 flex flex-col justify-between grow">
            <div>
              <p class="text-xs font-medium text-gray-600">${category.name}</p>
              <h3 class="text-md sm:text-lg font-black sm:font-bold mt-2">${post.title}</h3>
            </div>
            <p class="text-sm font-medium text-gray-500 mt-2">${post.date}</p>
          </div>
        </a>
      `;
    },

    renderPosts(postsToRender = this.posts) {
      const container = document.getElementById("posts-container");
      if (!container) return;

      const postsHTML = postsToRender
        .map((post, index) => this.createPostCard(post, index))
        .join("");
      container.innerHTML = postsHTML;
    },

    toggleTopDropDown() {
      this.showTopDropDown = !this.showTopDropDown;
      if (this.showTopDropDown) {
        this.showSearch = false;
      }
    },

    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        this.showTopDropDown = false;
      }
    },

    handleSearch() {
      const filteredPosts = this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.renderPosts(filteredPosts);
    },

    filterByCategory(categoryId) {
      this.selectedCategory =
        this.selectedCategory === categoryId ? null : categoryId;
      this.showTopDropDown = false;

      const filteredPosts = this.selectedCategory
        ? this.posts.filter((post) => post.category === this.selectedCategory)
        : this.posts;

      this.renderPosts(filteredPosts);
    },
  };
}
