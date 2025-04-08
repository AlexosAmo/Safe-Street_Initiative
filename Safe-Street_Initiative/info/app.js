const safeStreetsInitiative = {
    title: "Mokoena's Safe-Streets Initiative",
    logo: {
        src: "logo.png",
        alt: "Logo",
        width: 350,
        height: 400
    },
    navLinks: [
        { name: "About Us", url: "about.html" },
        { name: "Our Services", url: "services.html" },
        { name: "News", url: "news.html" },
        { name: "Contact Us", url: "contact.html" }
    ],
    mission: {
        description: "To create a safer and cleaner community by deploying advanced robots that maintain law and order, assist citizens, and promote environmental sustainability."
    },
    missionImage: {
        src: "e5.jpeg",
        alt: "Mission Image",
        width: 500,
        height: 300
    },
    established: "2024/08/13",
    address: {
        street: "482 Manione Street",
        city: "Pretoria Central",
        state: "PTA",
        zip: "0012"
    },
    operationalHours: {
        days: "Mon-Fri",
        hours: "9 AM - 5 PM"
    },
    socialMedia: [
        {
            platform: "WhatsApp",
            url: "https://web.whatsapp.com/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        },
        {
            platform: "Facebook",
            url: "https://www.facebook.com",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com",
            logo: "https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        }
    ],
    footerText: "&copy; 2024 Mokoena's Safe-Streets Initiative. All rights reserved."
};

function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    
    safeStreetsInitiative.navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        nav.appendChild(a);
    });
    
    return nav;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>${safeStreetsInitiative.footerText}</p>`;
    
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.className = 'social-media';
    
    safeStreetsInitiative.socialMedia.forEach(media => {
        const a = document.createElement('a');
        a.href = media.url;
        a.target = '_blank';
        const img = document.createElement('img');
        img.src = media.logo;
        img.alt = media.platform;
        img.width = 30;
        img.height = 30;
        a.appendChild(img);
        socialMediaDiv.appendChild(a);
    });
    
    footer.appendChild(socialMediaDiv);
    return footer;
}

function createContent() {
    const container = document.createElement('div');
    container.className = 'container';

    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = safeStreetsInitiative.title;
    const logo = document.createElement('img');
    logo.src = safeStreetsInitiative.logo.src;
    logo.alt = safeStreetsInitiative.logo.alt;
    logo.width = safeStreetsInitiative.logo.width;
    logo.height = safeStreetsInitiative.logo.height;
    
    header.appendChild(title);
    header.appendChild(logo);
    
    const mission = document.createElement('h4');
    mission.textContent = safeStreetsInitiative.mission.description;
    
    const missionImageContainer = document.createElement('div');
    const missionImage = document.createElement('img');
    missionImage.src = safeStreetsInitiative.missionImage.src;
    missionImage.alt = safeStreetsInitiative.missionImage.alt;
    missionImage.width = safeStreetsInitiative.missionImage.width;
    missionImage.height = safeStreetsInitiative.missionImage.height;
    missionImageContainer.appendChild(missionImage);
    
    const established = document.createElement('p');
    established.innerHTML = `<b>Established - ${safeStreetsInitiative.established}</b>`;
    
    const address = document.createElement('p');
    address.innerHTML = `<b>Address:</b> ${safeStreetsInitiative.address.street}, ${safeStreetsInitiative.address.city}, ${safeStreetsInitiative.address.state} ${safeStreetsInitiative.address.zip}`;
    
    const hours = document.createElement('p');
    hours.innerHTML = `<b>Operational Hours:</b> ${safeStreetsInitiative.operationalHours.days}: ${safeStreetsInitiative.operationalHours.hours}`;
    
    container.appendChild(header);
    container.appendChild(mission);
    container.appendChild(missionImageContainer);
    container.appendChild(established);
    container.appendChild(address);
    container.appendChild(hours);

    return container;
}

function renderApp() {
    const app = document.getElementById('app');
    app.appendChild(createNavbar());
    app.appendChild(createContent());
    app.appendChild(createFooter());
}

renderApp();