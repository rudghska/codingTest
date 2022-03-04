function solution(id_list, report, k) {
  const reportUsers = {};
  const email = {};

  const reportSet = new Set(report);
  const dedReport = [];

  for (const report of reportSet) {
    dedReport.push(report);
  }

  for (const id of id_list) {
    reportUsers[id] = {
      count: 0,
    };
    email[id] = {
      count: 0,
    };
  }

  dedReport.map(rep => {
    const d = rep.split(' ');
    reportUsers[d[1]].count++;
  });

  dedReport.map(rep => {
    const d = rep.split(' ');
    if (reportUsers[d[1]].count >= k) {
      email[d[0]].count++;
    }
  });

  return id_list.map(id => email[id].count);
}
