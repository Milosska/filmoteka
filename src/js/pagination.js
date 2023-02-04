// <!-- Герман -->
import Pagination from 'tui-pagination';
import { fetchInfo } from './components/fetch';
import { reloadOnPageChange, clearMarkup } from './components/trends-render';

fetchInfo('keyword', 'Batman', 1).then(resp => createAPagination(resp));
// В ФУНКЦИЮ ПЕРЕДАВАТЬ ОБЬЕКТ(resp), В КОТОРОМ НАХОДИТСЯ КОЛИЧЕСТВО ВСЕХ НАЙДЕННЫХ ЕЛЕМЕНТОВ, ТЕКУЩУЮ СТРАНИЦУ, КОТОРУЮ ОТОБРАЖАТЬ ПРИ ЗАГРУЗКЕ
function createAPagination(data) {
  const paganation = new Pagination(document.getElementById('pagination'), {
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
  });
  paganation.on('afterMove', ({ page }) => {
    const currentPage = page;
    try {
      clearMarkup();
      reloadOnPageChange(currentPage);
    } catch (error) {
      console.log(error);
    }
  });
}

export { createAPagination };
