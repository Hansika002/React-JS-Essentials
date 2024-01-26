import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Sam');
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
        const names = ['Kate', 'Sam', 'Bob'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
        //return names[int];
      }
      
      /*added*/
      const handleClick = () => {
        setCount(count + 1)
        console.log(count)
      }

      const handleClick2 = () => {
        console.log(count)
      }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click It</button>
        </main>
    )
}

export default Content