import Cookies from 'js-cookie';

let locale = Cookies.get('language');

export default ({ app }) => {
  updateTitlePage({ app });
}


function updateTitlePage({ app }) {
  // check change state and set title for page
  app.router.afterEach(route => {
    switch (locale) {
      case 'en':
        document.title = 'Fan8.club – The platform to connect idols and fan';
        break;
      case 'vi':
        document.title = 'Fan8.club – Nền tảng tiên phong kết nối idol và fan hâm mộ toàn cầu';
        break;
    }
  });
}

