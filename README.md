# cybersport-frontend

## VARIABLES
**Пожалуйста!!** используйте переменные из файла src/shared/styles/scss/variables.scss.  
Для этого импротрируйте файл в свои стили посредством @import "../path-to-file/variables.scss".  
Если в списке нет необходимой переменной ~~не ленитесь~~ - **создайте ее в этом файле** и используйте в своих стилях :sunglasses:  

## SHARED BUTTON
В shared/components/Button лежит **кнопка**  
Для того чтоб добавить свои стили:  
* Добавить в файл shared/components/Button/buttonTypes.js свой тип: имя класса  
   `export const buttonTypes = {`  
  `  primary: '',`  
  `  yellow: 'button-yellow',`  
`};`  
* Описать в файле shared/components/Button/Button.scss свои стили  
`.button-yellow {`  
  `  background: $button-background--yellow;`  
`}`  

