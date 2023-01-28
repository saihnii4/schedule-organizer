import camelot
import json

school = camelot.read_pdf("sch.pdf")

subjects = [*zip(school[0].df[2], school[0].df[1])][4:]
schedule = school[0].df.loc[:, 6:18]
periods = []

for period in range(6, 18):
    nth_period = schedule[period][3:].tolist()
    periods.append([*zip(nth_period, subjects)])

with open("data.json", "w") as buf:
    json.dump(periods, buf)