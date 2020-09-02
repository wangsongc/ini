window.BENCHMARK_DATA = {
  "lastUpdate": 1599019662386,
  "repoUrl": "https://github.com/wangsongc/ini",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "wangsongc@foxemail.com",
            "name": "wangsongc"
          },
          "committer": {
            "email": "wangsongc@foxemail.com",
            "name": "wangsongc"
          },
          "distinct": true,
          "id": "78347f04cf75db63a1638576ed77b61cac347f14",
          "message": "test benchmark",
          "timestamp": "2020-09-02T11:44:31+08:00",
          "tree_id": "a0011cd531fe51bd5ce5d1bc3a34890e1609caea",
          "url": "https://github.com/wangsongc/ini/commit/78347f04cf75db63a1638576ed77b61cac347f14"
        },
        "date": 1599019662001,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Key_Value",
            "value": 68.7,
            "unit": "ns/op",
            "extra": "17305966 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_Value_NonBlock",
            "value": 35.3,
            "unit": "ns/op",
            "extra": "32379944 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_Value_ViaSection",
            "value": 34.5,
            "unit": "ns/op",
            "extra": "32334313 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_Value_ViaSection_NonBlock",
            "value": 19.3,
            "unit": "ns/op",
            "extra": "61548438 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_Value_Direct",
            "value": 0.408,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_Value_Direct_NonBlock",
            "value": 0.407,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_String",
            "value": 77,
            "unit": "ns/op",
            "extra": "15343452 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_String_NonBlock",
            "value": 47.4,
            "unit": "ns/op",
            "extra": "25614211 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_String_ViaSection",
            "value": 42.9,
            "unit": "ns/op",
            "extra": "27606460 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_String_ViaSection_NonBlock",
            "value": 30.4,
            "unit": "ns/op",
            "extra": "40231252 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_SetValue",
            "value": 124,
            "unit": "ns/op",
            "extra": "9525348 times\n2 procs"
          },
          {
            "name": "Benchmark_Key_SetValue_VisSection",
            "value": 92.5,
            "unit": "ns/op",
            "extra": "13063886 times\n2 procs"
          }
        ]
      }
    ]
  }
}