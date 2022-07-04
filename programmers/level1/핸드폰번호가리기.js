function solution(phone_number) {
  const four = phone_number.slice(phone_number.length - 4, phone_number.length);
  return (
    phone_number
      .split('')
      .splice(0, phone_number.length - 4)
      .map(number => (number = '*'))
      .join('') + four
  );
}
