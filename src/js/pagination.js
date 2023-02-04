// <!-- Герман -->
import Pagination from 'tui-pagination';
import { fetchInfo } from './components/fetch';

// В ФУНКЦИЮ ПЕРЕДАВАТЬ ОБЬЕКТ(resp), В КОТОРОМ НАХОДИТСЯ КОЛИЧЕСТВО ВСЕХ НАЙДЕННЫХ ЕЛЕМЕНТОВ, ТЕКУЩУЮ СТРАНИЦУ, КОТОРУЮ ОТОБРАЖАТЬ ПРИ ЗАГРУЗКЕ
function createAPagination(data) {
  const paganation = new Pagination(
    document.getElementById('tui-pagination-container'),
    {
      page: data.page,
      totalItems: data.total_results,
      itemsPerPage: 20,
      usageStatistics: false,
      visiblePages: 5,
      centerAlign: true,
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    }
  );
  paganation.on('afterMove', ({ page }) => {
    const currentPage = page;
    //   ЭТО ВЫЗОВ ФЕТЧА С СТРАНИЦЕЙ, КОТОРУЮ ВЫБИРАЕТ КЛИЕНТ НА ПОЛЗУНКЕ
    //   НУЖНО ОТРИСОВАТЬ НОВУЮ СТРАНИЦУ ФИЛЬМОВ
    try {
      //   fetchInfo('keyword', 'Batman', currentPage).then(resp =>
      //     console.log(resp)
      //   );
    } catch (error) {
      console.log(error);
    }
  });
}

export { createAPagination };
