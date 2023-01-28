# my brain ain't braining
# superfluous and can be incorporated into main script

import json

with open("data.json", "r") as _buf:
    data = json.load(_buf)
    for period in data:
        for row in period:
            if not row[0]:
                row[0] = None

    _buf.close()

    with open("data.json", "w") as _buf:
        json.dump(data, _buf)