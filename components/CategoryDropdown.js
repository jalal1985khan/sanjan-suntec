import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas, Form} from 'react-bootstrap';

const CategoryDropdown = ({ onSelectChange }) => {
  const categories = [
    'Whitepapers',
    'Case Studies',
    'Datasheets',
    'Ebooks',
    'Podcasts',
    'Reports',
    'Articles',
    'Webinars',
    'Press Releases',
      'Events',
      'News',
      'Blogs',
      'Point of Views',
      'Use Cases',
  ];
    return (
<Form.Select aria-label="Select category" onChange={onSelectChange}>
        <option value="whitepapers" selected>Select Category</option>
                        {categories.map((category, index) => {
          let value = category.toLowerCase();
              // Handle special cases
          if (category === 'Whitepapers') {
                value = 'whitepaper';
          } else if (category === 'Case Studies') {
            value = 'case-studies';
          }else if (category === 'Datasheets') {
            value = 'datasheets';
          } else if (category === 'Ebooks') {
            value = 'ebooks';
          } else if (category === 'Reports') {
            value = 'reports';
          } else if (category === 'Articles') {
            value = 'articles';
          } else if (category === 'Webinars') {
            value = 'webinars';
          } else if (category === 'Press Releases') {
            value = 'press-releases';
          }else if (category === 'Events') {
            value = 'events';
          }else if (category === 'News') {
            value = 'news';
          }else if (category === 'Blogs') {
            value = 'blogs';
          }else if (category === 'Point of Views') {
            value = 'point-of-view';
          }else if (category === 'Use Cases') {
            value = 'use-cases';
          } else if (category === 'Podcasts') {
            value = 'podcasts';
          }

return (
<option key={index} value={value}>
            {category}
          </option>              
        );
      })}
    </Form.Select>
       


  );
};

export default CategoryDropdown;