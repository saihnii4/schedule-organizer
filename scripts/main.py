import camelot

import functools
import json
import re

regex = re.compile("[\d]")
pdf = camelot.read_pdf("schedule.pdf", pages='1,2,3,4,5')

append_lambda = (lambda O, x: (lambda _, O: O)(O.append(x), O))
extend_lambda = (lambda O, x: (lambda _, O: O)(O.extend(x), O))

data = []

for i in range(pdf.n):
    pdf[i].to_json('./tmp/_dump%d.json' % i)
    with open('./tmp/_dump%d.json' % i, 'r') as _buf:
        data.extend([json.load(_buf)])

# fetch teacher roster
subjects = []
init_page = [*map(lambda kv: [*kv.values()], data[0])]
for i, someting in enumerate(init_page[3:]):
    teacher, *subject = [*filter(lambda x: x, regex.sub("",
                                 " ".join(someting[:3]), 999).split(" "))]

    subjects.append((teacher, " ".join(subject), i))


schedule_compendium = [[]]

for page in data:
    page = [*map(lambda kv: [*kv.values()], page)][1:]
    for teacher, subject, i in subjects:
        if len(schedule_compendium)-1 < i:
            schedule_compendium.append([])
        schedule_compendium[i].extend(page[i])

(day_markers) = functools.reduce(lambda acc, x: append_lambda(
    acc, x[0]) if x[1] == '1' else acc, enumerate(schedule_compendium[0]), [])

# we no longer need periods here (note that [1:] + [2:] = [3:])
schedule_compendium = schedule_compendium[2:]
intervals = [*zip(day_markers, day_markers[1:]),
             (day_markers[-1], len(schedule_compendium[3]))]

week_schedule = {}

terms = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]

for interval, term in zip(intervals, terms):
    start, end = interval

    week_schedule[term] = []

    for teacher, subject, i in subjects:
        if len(schedule_compendium)-1 < i:
            continue
        week_schedule[term].append({"subject": subject,
                                    "teacher": teacher, "schedule": schedule_compendium[i][start:end]})

with open("./tmp/processed.json", "w") as final:
    json.dump(week_schedule, final)
