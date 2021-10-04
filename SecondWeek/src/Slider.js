import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import alisveris2 from "./alisveris2.png";
import alisveris3 from "./alisveris3.png";
import './style.css';


const items = [
  { 
    src: alisveris3,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: alisveris2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: alisveris3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items}  />;

export default Example;