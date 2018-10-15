const {Input} = window.antd;

const Inputs = () => (
  <div>
    <label className="form-label">
      Стоимость: <Input type="number" name="price" suffix="Руб" defaultValue="2000000" min="0"/>
    </label>

    <label className="form-label">
      На руках: <Input type="number" name="money" suffix="Руб" defaultValue="200000" min="0"/>
    </label>

    <label className="form-label">
      Срок кредита: <Input type="number" name="duration" suffix="Лет" defaultValue="5" min="0" max="100"/>
    </label>
  </div>
);
