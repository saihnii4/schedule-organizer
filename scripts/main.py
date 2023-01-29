# import camelot
# import re
# import json

# regex = re.compile("[\d-]")

# school = camelot.read_pdf("sch.pdf")

# subjects = []

# subjects = [*zip(school[0].df[2], school[0].df[1], school[0].df[0])][4:]

# # cleanse subjects
# subjects = [*map(lambda subj: [*filter(lambda x: x,
#                  map(lambda _: regex.sub("", _).strip(), subj))], subjects)]

# schedule = school[0].df.loc[:, 6:18]
# periods = []

# for period in range(6, 18):
#     nth_period = map(lambda x: None if not x else x, schedule[period][3:].tolist())
#     periods.append([*zip(nth_period, subjects)])

# with open("data.json", "w") as buf:
#     json.dump(periods, buf)

import camelot

import functools
import json
import re

regex = re.compile("[\d]")
_rege = re.compile(r"(MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY)")

try:
    pdf = camelot.read_pdf("sch.pdf", pages='1,2,3,4,5')
except UserWarning:
    pass

append_lambda = (lambda O, x: (lambda _, O: O)(O.append(x), O))
extend_lambda = (lambda O, x: (lambda _, O: O)(O.extend(x), O))

data = []

for i in range(pdf.n):
    pdf[i].to_json('_dump%d.json' % i)
    with open('_dump%d.json' % i, 'r') as _buf:
        data.extend([json.load(_buf)])

_acc = 0

# data = functools.reduce(lambda arr, page: extend_lambda(
#     arr, [*map(lambda kv: [*kv.values()], page)]), data, [])

days = []

for page in data:
    page = [*map(lambda kv: [*kv.values()], page)]

    (day_markers) = functools.reduce(lambda acc, x: append_lambda(
        acc, x[0]+_acc) if x[1] == '1' else acc, enumerate(page[1]), [])

    _acc += len(page[1])

    days = extend_lambda(days, day_markers)

intervals = [*zip(days, days[1:]), (days[-1],)]

monday_schedule = []
init_page = [*map(lambda kv: [*kv.values()], data[0])]
for someting in init_page[3:]:
    teacher, *subject = [*filter(lambda x: x, regex.sub("",
                                 " ".join(someting[:3]), 999).split(" "))]
    monday_schedule.append(
        (teacher, " ".join(subject), someting[intervals[0][0]:intervals[0][1]]))

print(monday_schedule)

# time_slots = slices[0]

# periods = [[], []]
# for i, slot in enumerate(time_slots):
#     if slot == '1':
#         periods[0].append(i)

# print(periods)

# pdf[0].to_json('dump.json')

# with open('dump.json', 'r') as buf:
#     data = json.load(buf)
