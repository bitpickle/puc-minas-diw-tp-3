export default function pagination(props) {
  const { pages, current } = props;
  const listItems = Array.from(Array(pages), (page, index) => {
    return index + 1;
  }).reduce((acc, page) => {
    return acc + `
              <li class="page-item"><a class="page-link" href="#">${page}</a></li>
            `;
  }, "")
  return `
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        ${listItems}
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  `
}