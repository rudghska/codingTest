function solution(participant, completion) {
  let result;
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] != completion[i]) {
      return (result = participant[i]);
    }
  }

  return result ? result : participant[participant.length - 1];
}
