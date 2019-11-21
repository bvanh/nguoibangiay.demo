
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Phantrang = props => {
  const { currentPage, totalItems, numberItemsPerPage, sort, order } = props;
  // phan trang theo so thu tu
  const itemPaginations = [];
  const numberPages = Math.ceil(totalItems / numberItemsPerPage);
  for (let i = 0; i < numberPages; i++) {
    let activeClass = false;
    if (i + 1 === parseInt(currentPage)) {
      activeClass = true;
    }
    itemPaginations.push(
      <PaginationItem active={activeClass} key={i}>
        <PaginationLink
          href={`/shoes?page=${i + 1}&sort=${sort}&order=${order}`}
        >
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    );
  }
  // phan trang next,prev
  const nextPage = (
    <PaginationItem>
      <PaginationLink
        next
        href={`/shoes?page=${currentPage + 1}&sort=${sort}&order=${order}`}
      />
    </PaginationItem>
  );
  if (currentPage <= 1) {
  return (
    <>
      <Pagination className="Pagenavigationexample">
        <PaginationItem disabled>
          <PaginationLink
            previous
          />
        </PaginationItem>
        {itemPaginations}
        {nextPage}
      </Pagination>
    </>
  );
}else{
  return (
    <>
      <Pagination className="Pagenavigationexample">
        <PaginationItem>
          <PaginationLink
            previous
            href={`/shoes?page=${currentPage - 1}&sort=${sort}&order=${order}`}
          />
        </PaginationItem>
        {itemPaginations}
        {nextPage}
      </Pagination>
    </>
  );
}
};

export default Phantrang;
