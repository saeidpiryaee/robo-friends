const Header = () => {
  const getTheYear = () => {
    const newDate = new Date();
    return newDate.getDay();
  };

  return (
    <>
      <p>The date is : {getTheYear()}</p>
    </>
  );
};
export default Header;
