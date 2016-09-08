const K_SIZE = 20;

const memlyStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '2px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 10,
  fontWeight: 'bold',
  padding: 2,
  cursor: 'pointer',
  marginRight: '10px'
};

const memlyStyleHover = {
  ...memlyStyle,
  border: '2px solid #3f51b5',
  color: '#f44336',
  width: 15,
  height: 15,
  left: -7.5,
  top: -7.5,
};

export {memlyStyle, memlyStyleHover, K_SIZE};