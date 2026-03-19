// 搜索功能
function search() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert('搜索功能开发中...\n搜索内容: ' + query);
    }
}

// 回车搜索
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                search();
            }
        });
    }
});

// 数据存储（示例数据）
const wikiData = {
    characters: [
        {
            id: 1,
            name: "主角",
            type: "主角",
            description: "从摆摊小贩开始的冒险者",
            skills: ["摆摊", "战斗", "交涉"]
        }
    ],
    items: [
        {
            id: 1,
            name: "新手木剑",
            type: "武器",
            rarity: "普通",
            description: "初学者使用的木剑"
        }
    ],
    locations: [
        {
            id: 1,
            name: "起始城镇",
            type: "城镇",
            description: "冒险开始的地方"
        }
    ],
    quests: [
        {
            id: 1,
            name: "第一次摆摊",
            type: "主线",
            description: "在城镇广场摆下你的第一个摊位"
        }
    ]
};

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 渲染卡片列表
function renderCards(containerId, data, template) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = data.map(item => template(item)).join('');
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前导航
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
