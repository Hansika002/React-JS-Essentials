const Content = () => {
    const handleNameChange = () => {
        const names = ['Kate', 'Sam', 'Bob'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
      
      /*added*/
      const handleClick = () => {
        console.log('You clicked it')
      }

      const handleClick2 = (name) => {
        console.log('${name} was clicked')
      }

    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('Sam')}>Click It</button>
        </main>
    )
}

export default Content