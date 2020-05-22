import React from 'react';
import ReactPaginate from 'react-paginate';

const pagination = (props) => (

  	<ReactPaginate
		previousLabel='<<'
		nextLabel='>>'
		nextClassName='nextClass'
		nextLinkClassName='Link'
		previousClassName='previousClass'
		previousLinkClassName='Link'
		breakClassName='pageLink'
		breakLabel='...'
		pageCount={Math.ceil(props.prod.length / props.perPage)}
		marginPagesDisplayed={2}
		pageRangeDisplayed={5}
		onPageChange={props.click}
		containerClassName='paginations'
		subContainerClassName='pages pagination'
		activeClassName='activeLink'
		activeLinkClassName='activeLink'
		pageClassName='pageLink'
	/>
)

export default pagination