// Функціонал пагінації
import Pagination from './components/tui-pagination-rework';
import { reloadOnPageChange, clearMarkup } from './films-render';

function createAPagination(data) {
  // if (data.total_results <= 20) {
  //   console.log(data);
  //   return;
  // }

  const pagination = new Pagination(document.getElementById('pagination'), {
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
  pagination.on('afterMove', ({ page }) => {
    // currentPage = page;
    try {
      clearMarkup();
      reloadOnPageChange(page);
    } catch (error) {
      console.log(error);
    }
  });
}

export { createAPagination };
