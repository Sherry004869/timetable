const Mock = require('mockjs')//引入
var task=Mock.mock({
    task_id:'@integer(1,10000)',
    name:'@name()',
    'task_type|0-1':0,//任务类别(0作业；1实验；2测试；3讨论；4考试；5报告；6程序)
    'deadline|0-20':0,//结束周次
    'open|0-1':0,//是否开放任务（0是，1否）
    requirement:'@cparagraph()',
    'submit_format':'[学号][姓名][实验1]',//提交文件命名规范，每部分用[]包含（比如[学号][姓名]）
    submit_type:'docx/doc',
    exercise:[{
        exercise_id:'@integer(1,10000)',
        'exercise_type|0-9':0,//题型（0选择；1填空；2名词解释；3简答；4综合；5分析；6编程；7判断；8建模；9设计）
        'difficulty|0-4':0,//难度（0简单；1较易；2一般；3：难；4：极难）
        score:'@integer(0,100)',
        content:'@cparagraph()',
        answer:'@cparagraph()',
        used_times:'@integer(0,9999)'//使用次数
    }]//题目表，用于生成试卷或者平时测试用
})
console.log(task)