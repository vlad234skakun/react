const ListsComponent = ()=> {
    return (
    <div>
      <h2>Списки</h2>

      <h3>Упорядоченный список</h3>
      <ol>
        <li>Пункт 1</li>
        <li>Пункт 2
          <ol>
            <li>Вложенный пункт 2.1</li>
            <li>Вложенный пункт 2.2</li>
          </ol>
        </li>
        <li>Пункт 3</li>
      </ol>

      <h3>Неупорядоченный список</h3>
      <ul>
        <li>Элемент A</li>
        <li>Элемент B
          <ul>
            <li>Вложенный элемент B.1</li>
            <li>Вложенный элемент B.2</li>
          </ul>
        </li>
        <li>Элемент C</li>
      </ul>
    </div>
    )
}
export default ListsComponent