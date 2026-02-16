const rootPath = window.rootPath || "";

if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = rootPath + "login.html";
}

const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
        window.location.href = rootPath + "login.html";
    });
}

const installButtons = document.querySelectorAll(".app-card button");

installButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = "Installed ✓";
        btn.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
    });
});

const allAppsData = [
    { name: "Steam", img: "app logo/Steam.jpg", desc: "Steam is game downloading software", link: "Apps/Games/SteamSetup.exe" },
    { name: "Epic Games", img: "app logo/Epic.jpg", desc: "Game and Unreal Engine installer", link: "Apps/Games/epic.msi" },
    { name: "Xbox", img: "app logo/xbox.webp", desc: "Game installing software", link: "Apps/Apps/Microsoft/XboxInstaller.exe" },
    { name: "Fortnite", img: "app logo/Fortnite.jpg", desc: "This is a battle royale game", link: "https://www.fortnite.com" },
    { name: "Genshin Impact", img: "app logo/Genshin Impact.webp", desc: "Open world story game", link: "D:\\OfficeSetup.exe" },
    { name: "PUBG", img: "app logo/PUBG.jpg", desc: "This is a battle royale game", link: "D:\\OfficeSetup.exe" },
    { name: "Counter Strike 2", img: "app logo/CS2.png", desc: "This is a battle royale game", link: "https://www.counter-strike.net/cs2" },
    { name: "Valorant", img: "app logo/Valo.jpg", desc: "This is a battle royale game", link: "https://playvalorant.com/en-gb/" },
    { name: "Call of Duty", img: "app logo/COD.jpg", desc: "This is a battle royale game", link: "https://www.callofduty.com" },
    { name: "Visual Studio Code", img: "app logo/VS code.jpg", desc: "Code Editor", link: "Apps/Apps/Coding Application/VSCodeUserSetup-x64-1.108.1.exe" },
    { name: "PyCharm", img: "app logo/pycham.png", desc: "Python IDE", link: "Apps/Apps/Coding Application/pycharm-professional-2025.2.5-installer_gYX3-e1.exe" },
    { name: "Turbo C++", img: "app logo/turbo c++.jpg", desc: "C/C++ Compiler", link: "Apps/Apps/Coding Application/turbo-c-3.7.8.9-installer_cRVgr-1.exe" },
    { name: "Oracle", img: "app logo/Oracle.png", desc: "SQL and PL/SQL Programming", link: "Apps/Apps/Coding Application/OracleXEUniv.exe" },
    { name: "Node JS", img: "app logo/Node.png", desc: "Node JS Programming", link: "Apps/Apps/Coding Application/OracleXEUniv.exe" },
    { name: "MySQL", img: "app logo/Mysql.jpg", desc: "MySQL Database Management System", link: "Apps/Apps/Coding Application/mysql-installer-web-community-8.0.44.0.msi" },
    { name: "8085", img: "app logo/8085.png", desc: "8085 Assembly Language Simulator", link: "Apps/Apps/Coding Application/8085.exe" },
    { name: "WhatsApp", img: "app logo/Whatsapp.jpg", desc: "Messaging App", link: "Apps/Apps/Social Media/WhatsApp Installer.exe" },
    { name: "Instagram", img: "app logo/Instagram.webp", desc: "Social Media", link: "Apps/Apps/Social Media/Instagram Installer.exe" },
    { name: "Facebook", img: "app logo/Facebook.png", desc: "Social Media", link: "Apps/Apps/Social Media/Facebook Installer.exe" },
    { name: "Threads", img: "app logo/@.png", desc: "Social Media", link: "Apps/Apps/Social Media/Threads, an Instagram app Installer.exe" },
    { name: "LinkedIn", img: "app logo/link.jpg", desc: "Professional Networking", link: "Apps/Apps/Social Media/LinkedIn Installer.exe" },
    { name: "X", img: "app logo/X.png", desc: "Social Media", link: "Apps/Apps/Social Media/Twitter Installer.exe" },
    { name: "Netflix", img: "app logo/Netflix.jpg", desc: "Streaming Platform", link: "Apps/Apps/OTT/Netflix Installer.exe" },
    { name: "YouTube", img: "app logo/Youtube.jpg", desc: "Video Platform", link: "https://www.youtube.com" },
    { name: "Crunchyroll", img: "app logo/Crunchyroll.png", desc: "Anime Streaming", link: "Apps/Apps/OTT/crunchyroll-2.0.5.0-installer_Wz-LmN3.exe" },
    { name: "Prime Video", img: "app logo/Prime.jpg", desc: "Streaming Platform", link: "Apps/Apps/OTT/Prime Video for Windows Installer.exe" },
    { name: "Jio Hotstar", img: "app logo/jio.png", desc: "Streaming Platform", link: "https://www.hotstar.com" },
    { name: "MX Player", img: "app logo/MX.png", desc: "Video Player", link: "https://www.mxplayer.in/" },
    { name: "Microsoft Office 2024", img: "app logo/Microsoft2024.jpg", desc: "Productivity Suite", link: "Apps/Apps/Microsoft/OfficeSetup.exe" },
    { name: "Microsoft Designer", img: "app logo/Designer.png", desc: "Graphic Design", link: "Apps/Apps/Microsoft/Microsoft Designer Installer.exe" },
    { name: "Microsoft Loop", img: "app logo/loop.webp", desc: "Collaboration", link: "Apps/Apps/Microsoft/Microsoft Loop Installer.exe" },
    { name: "Microsoft Teams", img: "app logo/team.png", desc: "Communication", link: "Apps/Apps/Microsoft/Microsoft teams Installer.exe" }
];

function addCardInteractivity(card) {
    const btn = card.querySelector("button");
    if (btn) {
        btn.addEventListener("click", () => {
            btn.innerText = "Installed ✓";
            btn.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
        });
    }
}

function searchApps() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let mainContainers = document.querySelectorAll("main.container");
    let searchContainer = document.getElementById("search-results-container");

    if (!searchContainer) {
        searchContainer = document.createElement("div");
        searchContainer.id = "search-results-container";
        searchContainer.className = "container";
        searchContainer.innerHTML = '<h2>Search Results</h2><div class="apps-grid" id="search-grid"></div>';
        let nav = document.querySelector("nav");
        if (nav && nav.nextSibling) {
            nav.parentNode.insertBefore(searchContainer, nav.nextSibling);
        } else {
            document.body.appendChild(searchContainer);
        }
    }

    let searchGrid = document.getElementById("search-grid");

    if (input.length === 0) {
        mainContainers.forEach(container => {
            if (container.id !== "search-results-container") container.style.display = "block";
        });
        searchContainer.style.display = "none";
        return;
    }

    mainContainers.forEach(container => {
        if (container.id !== "search-results-container") container.style.display = "none";
    });
    searchContainer.style.display = "block";
    searchGrid.innerHTML = "";

    let results = allAppsData.filter(app => app.name.toLowerCase().includes(input));

    if (results.length === 0) {
        searchGrid.innerHTML = "<p>No apps found.</p>";
    } else {
        results.forEach(app => {
            let card = document.createElement("div");
            card.className = "app-card";
            
            const imgPath = app.img.startsWith("http") ? app.img : rootPath + app.img;
            const linkPath = app.link.startsWith("http") || app.link.startsWith("D:") ? app.link : rootPath + app.link;
            card.innerHTML = `<img src="${imgPath}" alt="${app.name}"><h3>${app.name}</h3><p>${app.desc}</p><a href="${linkPath}"><button>Install</button></a>`;
            
            // Add interactivity and ensure visibility for search results
            addCardInteractivity(card);
            card.classList.add("visible"); 
            
            searchGrid.appendChild(card);
        });
    }
}
