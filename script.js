// --- TRANSLATIONS DATA ---
const i18n = {
    vi: {
        "nav-skills": "Kỹ năng",
        "nav-projects": "Dự án",
        "nav-certs": "Chứng chỉ",
        "nav-contact": "Liên hệ",
        "hero-welcome": "Chào mừng bạn",
        "hero-title": "Mình là <span class='text-accent'>Văn Vĩnh Thái Toàn</span>",
        "hero-subtitle": "Sinh viên năm 3 chuyên ngành <span class='text-accent fw-bold'>Web Development</span> tại <span class='text-dark fw-semibold'>Đại học Sư phạm TP.HCM</span>.",
        "pitch-title": "Tóm tắt chuyên môn",
        "pitch-desc": "Với tư duy thiết kế hiện đại kết hợp kỹ thuật lập trình vững chắc, mình không chỉ xây dựng giao diện mà còn tối ưu hóa trải nghiệm người dùng và hiệu năng hệ thống. Mình luôn sẵn sàng mang lại giá trị thực tế cho doanh nghiệp thông qua tinh thần học hỏi nhanh và khả năng thích nghi với các công nghệ mới như <span class='fw-bold text-dark'>C#, React, và Angular</span>.",
        "btn-contact": "Liên hệ ngay",
        "btn-resume": "Xem Resume",
        "skills-label": "Chuyên môn",
        "skills-title": "Kỹ năng công nghệ",
        "projects-label": "Sản phẩm",
        "projects-title": "Dự án tiêu biểu",
        "certs-label": "Thành tựu",
        "certs-title": "Chứng chỉ & Giải thưởng",
        "footer-label": "Liên hệ",
        "footer-title": "Kết nối với mình",
        "footer-desc": "Mình luôn sẵn sàng cho những dự án và cơ hội hợp tác mới. Hãy liên hệ với mình qua bất kỳ kênh nào dưới đây.",
        "contact-phone": "Số điện thoại",
        "contact-location": "Địa chỉ",
        "footer-tagline": "Xây dựng bằng tâm huyết.",
        "view-project": "Xem dự án",
        "view-cert": "Xem chứng chỉ"
    },
    en: {
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-certs": "Certificates",
        "nav-contact": "Contact",
        "hero-welcome": "Welcome",
        "hero-title": "I am <span class='text-accent'>Van Vinh Thai Toan</span>",
        "hero-subtitle": "3rd-year student majoring in <span class='text-accent fw-bold'>Web Development</span> at <span class='text-dark fw-semibold'>Ho Chi Minh City University of Education</span>.",
        "pitch-title": "Professional Summary",
        "pitch-desc": "Combining modern design thinking with solid programming skills, I don't just build interfaces—I optimize user experience and system performance. I am ready to deliver real value to businesses through fast learning and adaptability to new technologies like <span class='fw-bold text-dark'>C#, React, and Angular</span>.",
        "btn-contact": "Contact Me",
        "btn-resume": "View Resume",
        "skills-label": "Expertise",
        "skills-title": "Technical Skills",
        "projects-label": "Portfolio",
        "projects-title": "Featured Projects",
        "certs-label": "Achievements",
        "certs-title": "Certificates & Awards",
        "footer-label": "Contact",
        "footer-title": "Get in Touch",
        "footer-desc": "I am always open to new projects and collaboration opportunities. Feel free to reach out through any of the channels below.",
        "contact-phone": "Phone Number",
        "contact-location": "Location",
        "footer-tagline": "Built with passion.",
        "view-project": "View Project",
        "view-cert": "View Certificate"
    }
};

const mySkills = [
    {
        icon: "fas fa-code",
        title: { vi: "Frontend Development", en: "Frontend Development" },
        description: {
            vi: "Tạo ra các giao diện người dùng hiện đại, tương tác cao và tối ưu trên mọi thiết bị.",
            en: "Creating modern, highly interactive user interfaces optimized for all devices."
        },
        subSkills: ["React", "Angular", "Bootstrap 5", "HTML5/CSS3"]
    },
    {
        icon: "fas fa-server",
        title: { vi: "Backend Development", en: "Backend Development" },
        description: {
            vi: "Xây dựng hệ thống máy chủ mạnh mẽ, xử lý logic nghiệp vụ và bảo mật dữ liệu.",
            en: "Building robust server systems, handling business logic and data security."
        },
        subSkills: ["C#", ".NET Core", "RESTful API", "Node.js(Basic)", "JWT"]
    },
    {
        icon: "fas fa-database",
        title: { vi: "Database Design", en: "Database Design" },
        description: {
            vi: "Thiết kế cấu trúc dữ liệu tối ưu, đảm bảo tính toàn vẹn và hiệu suất truy vấn.",
            en: "Designing optimal data structures, ensuring integrity and query performance."
        },
        subSkills: ["PostgreSQL", "SQL Server", "Entity Framework", "MongoDB"]
    },
    {
        icon: "fas fa-infinity",
        title: { vi: "DevOps", en: "DevOps" },
        description: {
            vi: "Tối ưu hóa quy trình triển khai và quản lý ứng dụng thông qua container hóa.",
            en: "Optimizing deployment and application management through containerization."
        },
        subSkills: ["Docker", "Github"]
    },
    {
        icon: "fas fa-tools",
        title: { vi: "Development Tools", en: "Development Tools" },
        description: {
            vi: "Sử dụng các công cụ bổ trợ để tăng năng suất và quản lý mã nguồn hiệu quả.",
            en: "Using supportive tools to increase productivity and manage source code efficiently."
        },
        subSkills: ["TortoiseGit", "Postman", "Azure"]
    }
];

const myProjects = [
    {
        title: {
            vi: "Hệ thống quản lý bán hàng doanh nghiệp(in progress)",
            en: "Enterprise Sales Management System"
        },
        description: {
            vi: "Hệ thống hỗ trợ quản lý bán hàng toàn diện, tích hợp thanh toán, xử lý đơn hàng trực tuyến và quản trị hệ thống.",
            en: "A comprehensive sales management system with integrated payment processing, online order handling, and system administration."
        },
        tech: ["C#", "PostgreSQL", "Angular"],
        link: "https://ui-ban-hang.vercel.app/"
    }
];

const myCerts = [
    {
        title: { vi: "AI Boost Bites: Poke Holes in Your Strategy", en: "AI Boost Bites: Poke Holes in Your Strategy" },
        organization: "Google Cloud",
        year: "2026",
        image: "image/google skills/PokeHoles.png",
        link: "https://www.skills.google/public_profiles/69c3359f-b798-4799-bea9-e6b066368210/badges/23332922"
    },
    {
        title: { vi: "AI Boost Bites: Project Notebooks", en: "AI Boost Bites: Project Notebooks" },
        organization: "Google Cloud",
        year: "2026",
        image: "image/google skills/Project NoteBooks.png",
        link: "https://www.skills.google/public_profiles/69c3359f-b798-4799-bea9-e6b066368210/badges/23333312"
    },
    {
        title: { vi: "AI Boost Bites: Your AI Chart Detective", en: "AI Boost Bites: Your AI Chart Detective" },
        organization: "Google Cloud",
        year: "2026",
        image: "image/google skills/YourAIChart.png",
        link: "https://www.skills.google/public_profiles/69c3359f-b798-4799-bea9-e6b066368210/badges/23333256"
    },
    {
        title: { vi: "AI Boost Bites: Your Personal AI Tutor", en: "AI Boost Bites: Your Personal AI Tutor" },
        organization: "Google Cloud",
        year: "2026",
        image: "image/google skills/PersonalAITUTOR.png",
        link: "https://www.skills.google/public_profiles/69c3359f-b798-4799-bea9-e6b066368210/badges/23333180"
    },
    {
        title: { vi: "AI Boost Bites: Presentation Scripts with Gemini", en: "AI Boost Bites: Presentation Scripts with Gemini" },
        organization: "Google Cloud",
        year: "2026",
        image: "image/google skills/Presentation.png",
        link: "https://www.skills.google/public_profiles/69c3359f-b798-4799-bea9-e6b066368210/badges/23333153"
    },
    {
        title: { vi: "Microsoft Training Certificate", en: "Microsoft Training Certificate" },
        organization: "Microsoft / Coursera",
        year: "2026",
        image: "image/Cousera/Microsoft.png",
        link: "#"
    },
    {
        title: { vi: "Educba Professional Certificate", en: "Educba Professional Certificate" },
        organization: "Educba / Coursera",
        year: "2026",
        image: "image/Cousera/Educba.png",
        link: "#"
    }
];


// --- LOGIC ---

let currentLang = 'vi';

function updateUI() {
    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });

    // Re-render dynamic components
    renderSkills();
    renderProjects();
    renderCerts();

    // Update toggle button text
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.innerText = currentLang === 'vi' ? 'EN' : 'VN';
    }
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = '';

    mySkills.forEach(skill => {
        const skillHtml = `
            <div class="col-md-4">
                <div class="card-custom text-start h-100">
                    <div class="mb-4 text-accent"><i class="${skill.icon} fa-2x"></i></div>
                    <h4 class="fw-bold mb-3">${skill.title[currentLang]}</h4>
                    <p class="text-muted mb-4 small">${skill.description[currentLang]}</p>
                    <div class="d-flex flex-wrap gap-2">
                        ${skill.subSkills.map(s => `<span class="badge-tech">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += skillHtml;
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    myProjects.forEach(project => {
        const projectHtml = `
            <div class="col-md-6 col-lg-4">
                <div class="card-custom d-flex flex-column h-100">
                    <h4 class="fw-bold mb-2">${project.title[currentLang]}</h4>
                    <p class="text-muted mb-4 small flex-grow-1">${project.description[currentLang]}</p>
                    <div class="d-flex gap-2 mb-4 flex-wrap">
                        ${project.tech.map(t => `<span class="badge-tech">${t}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="text-accent fw-bold text-decoration-none mt-auto">
                        ${i18n[currentLang]['view-project']} <i class="fas fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += projectHtml;
    });
}

function renderCerts() {
    const container = document.getElementById('certs-container');
    if (!container) return;
    container.innerHTML = '';

    myCerts.forEach(cert => {
        const certHtml = `
            <div class="col-md-6 col-lg-4">
                <a href="${cert.link}" target="_blank" class="card-custom text-decoration-none d-flex flex-column align-items-center p-4 h-100 text-center">
                    <div class="mb-3 cert-img-container">
                        <img src="${cert.image}" alt="${cert.title[currentLang]}" style="width: 140px; height: 140px; object-fit: contain; transition: transform 0.3s;">
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="mb-1 text-dark fw-bold">${cert.title[currentLang]}</h6>
                        <p class="mb-2 text-muted small">${cert.organization} - ${cert.year}</p>
                    </div>
                    <span class="text-accent small fw-bold mt-auto">
                        ${i18n[currentLang]['view-cert']} <i class="fas fa-external-link-alt ms-1"></i>
                    </span>
                </a>
            </div>
        `;
        container.innerHTML += certHtml;
    });
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    updateUI();

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'vi' ? 'en' : 'vi';
            updateUI();
        });
    }

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });
});
