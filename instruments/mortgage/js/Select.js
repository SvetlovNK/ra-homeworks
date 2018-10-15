const {AutoComplete} = window.antd;
const options = ['Квартира в новостройке', 'Готовая квартира', 'Загородный дом'];

const Autocomplete = () => (
  <div>
    <AutoComplete dataSource={options} placeholder="Тип квартиры:"/>
  </div>
);