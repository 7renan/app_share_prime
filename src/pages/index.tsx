import type { NextPage } from 'next'
// components

import { Item } from "../@types/Item";
import { Items as dataItems } from "../data";
import { Carousel } from '../components/Carousel';
import { Pivot, PivotItem, Text } from "@fluentui/react";


// styles
import styles from './home.module.scss'
import { useState } from 'react';


const Home: NextPage = () => {

  const [items, setItems] = useState(dataItems)

  return (
    <>
        <Pivot>
          <PivotItem headerText="SLIDER" alwaysRender={true} itemKey="slider">
            <Carousel items={items} />
          </PivotItem>
          <PivotItem
            headerText="CADASTRO"
            alwaysRender={true}
            itemKey="registration"
          >
            <div>CADSSTRAO</div>
            {/* <ConfigCarrossel
              items={items}
              setItems={this.setItems}
              changePage={this.changePage}
            /> */}
          </PivotItem>
        </Pivot>
    </>
  )
}

export default Home
