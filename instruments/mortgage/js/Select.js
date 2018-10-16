const {AutoComplete} = window.antd;
const options = ['Квартира в новостройке', 'Готовая квартира', 'Загородный дом'];

const Autocomplete = ({onChange}) => (
  <div>
    <AutoComplete dataSource={options} onChange={onChange} placeholder="Тип квартиры:"/>
  </div>
);