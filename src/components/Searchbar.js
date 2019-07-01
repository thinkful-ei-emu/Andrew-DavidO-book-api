import React from 'react';

class Searchbar extends React.Component {
  
  formSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.target;
    const queryObj = {};

    const formData = new FormData(searchForm);

    formData.forEach((value, key) => {
      if (value) queryObj[key] = value;
    });

    console.log(queryObj);
    this.props.fetchBooks(queryObj);  
  
    searchForm.q.value = '';
  }
  render() {
    return <>
      <form className='searchForm' onSubmit={this.formSubmit}>
        <input name='q' type='text' placeholder='Book Title'></input>
        <input type='submit' value='Search'></input>
        <select name='printType'>
          <option>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <select name='filter'>
          <option value=''>No Filter</option>
          <option value='ebooks'>Ebooks</option>
          <option value='free-ebooks'>Free Ebooks</option>
          <option value='full'>Full</option>
          <option value='paid-ebooks'>Paid Ebooks</option>
          <option value='partial'>Partial</option>
        </select>
      </form>
    </>
  }

}

export default Searchbar;