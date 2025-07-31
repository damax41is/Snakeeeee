function SnakePage() {
  const { Container, Typography, Button } = MaterialUI;
  React.useEffect(() => {
    const canvas = document.getElementById('game');
    if (canvas && window.initSnakeGame) {
      window.initSnakeGame(canvas);
    }
  }, []);

  return (
    React.createElement(Container, { maxWidth: 'sm', sx: { mt: 4, textAlign: 'center' } },
      React.createElement(Typography, { variant: 'h4', component: 'h1', gutterBottom: true }, 'Snake Game'),
      React.createElement(Button, { href: 'index.html', sx: { mb: 2 } }, '\u2190 Back to Dashboard'),
      React.createElement('canvas', { id: 'game', width: 400, height: 400 })
    )
  );
}

ReactDOM.render(React.createElement(SnakePage), document.getElementById('root'));
