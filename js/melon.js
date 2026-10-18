(() => {
  'use strict';

  const TOP_COUNT = 12;
  const songs = window.MELON_DATA;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  const formatLikes = (n) => (n >= 1000
    ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
    : String(n));

  const createCover = (song) => {
    const img = el('img', 'cover');
    img.src = song.albumImageUrl;
    img.alt = `${song.title} 앨범 커버`;
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    return img;
  };

  const createLike = (song) => {
    const btn = el('button', 'like');
    btn.type = 'button';
    let liked = false;
    const render = () => {
      btn.textContent = `${liked ? '♥' : '♡'} ${formatLikes(song.likes + (liked ? 1 : 0))}`;
      btn.setAttribute('aria-pressed', String(liked));
    };
    btn.addEventListener('click', () => { liked = !liked; render(); });
    render();
    return btn;
  };

  const createPlay = () => {
    const btn = el('button', 'play', '재생');
    btn.type = 'button';
    return btn;
  };

  // Top 12 card (slide banner)
  const createCard = (song) => {
    const card = el('div', 'card');

    const thumb = el('div', 'card-thumb');
    thumb.appendChild(el('span', 'rank-badge', song.rank));
    thumb.appendChild(createCover(song));
    card.appendChild(thumb);

    const info = el('div', 'card-info');
    info.appendChild(el('div', 'card-title', song.title));
    info.appendChild(el('div', 'card-artist', song.artist));
    card.appendChild(info);

    const foot = el('div', 'card-foot');
    foot.appendChild(createLike(song));
    foot.appendChild(createPlay());
    card.appendChild(foot);

    return card;
  };

  // List row (rank 13 and below)
  const createRow = (song) => {
    const row = el('li', 'row');
    row.appendChild(el('span', 'row-rank', song.rank));

    const thumb = el('div', 'row-thumb');
    thumb.appendChild(createCover(song));
    row.appendChild(thumb);

    const info = el('div', 'row-info');
    info.appendChild(el('div', 'row-title', song.title));
    info.appendChild(el('div', 'row-artist', song.artist));
    row.appendChild(info);

    const side = el('div', 'row-side');
    side.appendChild(createLike(song));
    side.appendChild(createPlay());
    row.appendChild(side);

    return row;
  };

  // Top 12 banner
  const topSlides = document.getElementById('top-slides');
  songs.slice(0, TOP_COUNT).forEach(song => {
    const slide = el('div', 'swiper-slide');
    slide.appendChild(createCard(song));
    topSlides.appendChild(slide);
  });

  new Swiper('#top-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 12,
    breakpoints: {
      768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
    },
    navigation: {
      nextEl: '#top-next',
      prevEl: '#top-prev',
    },
    pagination: {
      el: '#top-dots',
      clickable: true,
    },
  });

  // Ranking list
  const chart = document.getElementById('chart');
  songs.slice(TOP_COUNT).forEach(song => {
    chart.appendChild(createRow(song));
  });
})();
