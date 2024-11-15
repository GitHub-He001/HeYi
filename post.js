const articles = {
  1: {
    id: "1",
    category: "爱国情怀",
    date: "2024年3月21日星期四",
    title: "传承红色基因，弘扬爱国精神",
    subtitle: "铭记历史，展望未来",
    coverImage: "./imgages/post1.jpg",
    imageCaption: "五星红旗迎风飘扬",
    content: [
      {
        type: "text",
        content:
          "作为新时代的青年，我们肩负着传承红色基因、弘扬爱国精神的重要使命。回首历史长河，无数仁人志士为中华民族的独立和解放抛头颅、洒热血，他们的爱国情怀永远值得我们学习和铭记。",
      },
      {
        type: "text",
        content:
          "在这个日新月异的时代，我们见证着祖国的日益强大。从科技创新到文化传承，从经济发展到民生改善，每一个进步都凝聚着全国人民的智慧和汗水。",
      },
      {
        type: "text",
        content:
          "作为新一代的建设者，我们要以实际行动践行爱国精神。在各自的岗位上发光发热，为祖国的发展贡献自己的一份力量。无论是科研工作者的孜孜探索，还是普通工作者的默默奉献，都是爱国精神的具体体现。",
      },
      {
        type: "text",
        content:
          "教育是立国之本，科技是强国之基。我们要在这些关键领域持续发力，以创新驱动发展，以教育铸就未来。同时，我们也要积极弘扬中华优秀传统文化，增强文化自信。",
      },
      {
        type: "text",
        content:
          "站在新的历史起点上，我们要以更加昂扬的姿态迎接挑战。团结一心，开拓创新，为实现中华民族伟大复兴的中国梦不懈奋斗。让我们携手共建更加繁荣富强的祖国！",
      },
      {
        type: "text",
        content:
          "爱国不是口号，而是行动。从点滴做起，从现在做起，让我们用实际行动诠释新时代青年的爱国情怀。相信在全国人民的共同努力下，我们的祖国必将更加繁荣昌盛！",
      },
    ],
  },
  // ... 添加更多文章
};

function postData() {
  return {
    post: null,

    init() {
      const urlParams = new URLSearchParams(window.location.search);
      const postId = urlParams.get("id");
      this.fetchPost(postId);
    },

    fetchPost(postId) {
      this.post = articles[postId];
      if (!this.post) {
        window.location.href = "index.html";
      }
    },

    renderContent(content) {
      if (typeof content === "string") {
        return `<p class="text-lg">${content}</p>`;
      }

      switch (content.type) {
        case "text":
          return `<p class="text-lg">${content.content}</p>`;
        case "image":
          return `
            <div class="my-8">
              <img src="${content.url}" 
                   alt="${content.caption}"
                   class="w-full rounded-lg"
                   loading="lazy">
              <p class="text-sm text-gray-500 mt-2">${content.caption}</p>
            </div>
          `;
        default:
          return "";
      }
    },
  };
}
