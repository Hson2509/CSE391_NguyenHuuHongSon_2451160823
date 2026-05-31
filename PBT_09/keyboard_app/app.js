// === GALLERY STATE ===
const totalImages = 9;
let currentIndex = 1;
let isPlaying = false;
let slideshowInterval = null;

const mainImage = document.getElementById('mainImage');
const playIndicator = document.getElementById('playIndicator');
const thumbnailsContainer = document.getElementById('thumbnails');

// Khởi tạo Thumbnails
for (let i = 1; i <= totalImages; i++) {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.textContent = i;
    thumb.setAttribute('role', 'tab');
    thumb.setAttribute('aria-selected', i === 1 ? 'true' : 'false');
    thumb.tabIndex = 0; // Để user có thể dùng Tab di chuyển tới

    thumb.addEventListener('click', () => loadImage(i));
    thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') loadImage(i);
    });
    thumbnailsContainer.appendChild(thumb);
}

const updateThumbnailsUI = () => {
    document.querySelectorAll('.thumb').forEach((th, idx) => {
        const isActive = (idx + 1 === currentIndex);
        th.classList.toggle('active', isActive);
        th.setAttribute('aria-selected', isActive);
    });
};

const loadImage = (index) => {
    if (index < 1) index = totalImages;
    if (index > totalImages) index = 1;
    currentIndex = index;
    mainImage.src = `https://placehold.co/600x400?text=Image+${currentIndex}`;
    mainImage.alt = `Hình ảnh ${currentIndex} trong bộ sưu tập`;
    updateThumbnailsUI();
};

const toggleSlideshow = () => {
    isPlaying = !isPlaying;
    playIndicator.classList.toggle('hidden', !isPlaying);
    if (isPlaying) {
        slideshowInterval = setInterval(() => loadImage(currentIndex + 1), 2000);
    } else {
        clearInterval(slideshowInterval);
    }
};

// Nút bấm UI
document.getElementById('prevBtn').addEventListener('click', () => loadImage(currentIndex - 1));
document.getElementById('nextBtn').addEventListener('click', () => loadImage(currentIndex + 1));
document.getElementById('togglePlayBtn').addEventListener('click', toggleSlideshow);

// === COMMAND PALETTE STATE ===
const commands = [
    { id: 1, name: "Go to Settings" },
    { id: 2, name: "Change Theme (Dark/Light)" },
    { id: 3, name: "View Profile" },
    { id: 4, name: "Logout" }
];
let cmdSelectedIndex = 0;
let filteredCommands = [...commands];

const palette = document.getElementById('commandPalette');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');

const renderCommands = () => {
    cmdList.innerHTML = '';
    filteredCommands.forEach((cmd, idx) => {
        const li = document.createElement('li');
        li.textContent = cmd.name;
        li.setAttribute('role', 'option');
        if (idx === cmdSelectedIndex) {
            li.classList.add('selected');
            li.setAttribute('aria-selected', 'true');
        }
        cmdList.appendChild(li);
    });
};

const closePalette = () => {
    palette.classList.add('hidden');
    cmdInput.value = '';
};

cmdInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    filteredCommands = commands.filter(c => c.name.toLowerCase().includes(val));
    cmdSelectedIndex = 0;
    renderCommands();
});

// === GLOBAL KEYBOARD SHORTCUTS ===
document.addEventListener('keydown', (e) => {
    const isPaletteOpen = !palette.classList.contains('hidden');

    // 1. Mở Command Palette bằng Ctrl + K
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault(); // Chặn focus vào thanh URL của trình duyệt
        palette.classList.remove('hidden');
        cmdInput.focus();
        filteredCommands = [...commands];
        renderCommands();
        return;
    }

    // 2. Thoát modal bằng Escape
    if (e.key === 'Escape') {
        closePalette();
        return;
    }

    // 3. Xử lý phím khi Command Palette đang mở
    if (isPaletteOpen) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (cmdSelectedIndex < filteredCommands.length - 1) cmdSelectedIndex++;
            renderCommands();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (cmdSelectedIndex > 0) cmdSelectedIndex--;
            renderCommands();
        } else if (e.key === 'Enter') {
            if (filteredCommands[cmdSelectedIndex]) {
                alert(`Đã chạy lệnh: ${filteredCommands[cmdSelectedIndex].name}`);
                closePalette();
            }
        }
        return;
    }

    // 4. Xử lý Gallery (Khi không kẹt trong input văn bản nào)
    const activeTag = document.activeElement.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft') {
        loadImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
        loadImage(currentIndex + 1);
    } else if (e.key === ' ') {
        e.preventDefault(); // Ngăn cuộn trang
        toggleSlideshow();
    } else if (e.key >= '1' && e.key <= '9') {
        const num = parseInt(e.key);
        if (num <= totalImages) loadImage(num);
    }
});

// Khởi chạy
loadImage(1);       