import {DefaultButton, DetailsList, IColumn, IIconProps, Panel, PrimaryButton } from '@fluentui/react'
import { useBoolean } from '@fluentui/react-hooks';
import { useState } from 'react';

import { Items as dataItems } from '../../data';
import style from './registration.module.scss'
// styles

const addIcon: IIconProps = { iconName: "Add" };
const buttonStyles = {root : { backgroundColor: '#FAB416', border: 0 }}

const columns: IColumn[] = [
    {
      key: "c1",
      name: "ID",
      fieldName: "id",
      minWidth: 60,
      maxWidth: 60,
    },
    {
      key: "c2",
      name: "Título",
      fieldName: "title",
      minWidth: 200,
      maxWidth: 400,
    },
    {
      key: "c3",
      name: "Descrição",
      fieldName: "description",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: "c4",
      name: "Link",
      fieldName: "url_direction",
      minWidth: 200,
      maxWidth: 400,
    },
  ];

export function Registration(){
    const [items, setItems] = useState(dataItems)
    const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

    const onRenderFooterContent =
        () => (
          <div>
            <PrimaryButton onClick={dismissPanel} styles={buttonStyles}>
              Save
            </PrimaryButton>
            <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
          </div>
        );

    return (
    <div className={style.container}>
        <div className={style.actions}>
            <h2>Caadastro de imagens</h2>
            <PrimaryButton iconProps={addIcon} styles={buttonStyles} onClick={openPanel}>
                Nova imagem
            </PrimaryButton>
        </div>
        <div className={style.tableContainer}>
        <DetailsList
          items={items}
          columns={columns}
        />
        </div>
        <Panel
        isLightDismiss
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
        headerText="Nova imagem"
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
      >
      </Panel>
    </div>
)
}