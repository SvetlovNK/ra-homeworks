const App = () => {
  return (
    <Accordian title="React">
      <AccordianItem>
        <AccordianHeader>
          <h3>Компоненты</h3>
        </AccordianHeader>
        <AccordianBody>
          Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием,
          а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается
          иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет
          строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
        </AccordianBody>
      </AccordianItem>

      <AccordianItem>
        <AccordianHeader>
          <h3>Выучил раз, используй везде!</h3>
        </AccordianHeader>
        <AccordianBody>
          После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке
          мобильных приложений с использованием React Native.
        </AccordianBody>
      </AccordianItem>

      <AccordianItem>
        <AccordianHeader>
          <h3>Использование JSX</h3>
        </AccordianHeader>
        <AccordianBody>
          JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в
          JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
        </AccordianBody>
      </AccordianItem>
    </Accordian>
  )
};