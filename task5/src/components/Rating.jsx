export const Rating = ({ rating }) => {
  return rating ? (
    <span style={{ fontWeight: 'bold', fontWeigth: '700', fontSize: '32px', color: '#6C6C6C' }}> {rating}</span>
  ) : (
    <span style={{ fontWeight: 'bold', fontWeigth: '700', fontSize: '32px', color: '#6C6C6C', marginTop: '-5px' }}>
      {' '}
      -
    </span>
  );
};
