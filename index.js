function Dashboard() {
  const { Container, Typography, Card, CardActionArea, CardMedia, CardContent } = MaterialUI;
  return (
    React.createElement(Container, { maxWidth: 'sm', sx: { mt: 4, textAlign: 'center' } },
      React.createElement(Typography, { variant: 'h4', component: 'h1', gutterBottom: true }, '게임 대시보드'),
      React.createElement(Card, { sx: { width: 200, mx: 'auto' } },
        React.createElement(CardActionArea, { href: 'snake.html' },
          React.createElement(CardMedia, { component: 'img', src: 'snake.svg', sx: { height: 150 } }),
          React.createElement(CardContent, null,
            React.createElement(Typography, { variant: 'h6', component: 'div' }, 'Snake Game')
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(Dashboard), document.getElementById('root'));
