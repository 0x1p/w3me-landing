
const imageSlots = document.getElementsByClassName("image-slot")

const img = [
    'img/icons/aave',
    'img/icons/alpha',
    'img/icons/apecoin',
    'img/icons/ar',
    'img/icons/arb',
    'img/icons/axs',
    'img/icons/bancor',
    'img/icons/bat',
    'img/icons/bifi',
    'img/icons/bnb',
    'img/icons/cake',
    'img/icons/comp',
    'img/icons/cow',
    'img/icons/crv',
    'img/icons/cvx',
    'img/icons/dai',
    'img/icons/doge',
    'img/icons/dydx',
    'img/icons/ens',
    'img/icons/eth',
    'img/icons/fei',
    'img/icons/frax',
    'img/icons/gamma',
    'img/icons/gno',
    'img/icons/gtc',
    'img/icons/hnt',
    'img/icons/ldo',
    'img/icons/link',
    'img/icons/mana',
    'img/icons/matic',
    'img/icons/mir',
    'img/icons/mkr',
    'img/icons/ogn',
    'img/icons/op',
    'img/icons/ren',
    'img/icons/sand',
    'img/icons/shiba',
    'img/icons/snx',
    'img/icons/sol',
    'img/icons/srm',
    'img/icons/steem',
    'img/icons/sushi',
    'img/icons/ton',
    'img/icons/uni',
    'img/icons/usdc',
    'img/icons/usdt',
    'img/icons/xmr',
    'img/icons/yfi',
];


const randomizedImg = img.sort(() => Math.random() - 0.5);

console.log(randomizedImg);


for (let i = 0; i < imageSlots.length; i++) {
    imageSlots[i].src = `${randomizedImg[i]}`;
  }
