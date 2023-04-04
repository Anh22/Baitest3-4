
// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()
function reverseString(str_input){

    let str_input= 'program';
    let str_inputt=str_input.split('');
    let newArray = [];
    console.log(str_inputt); 
    for(let i=str_inputt.length-1 ;i>=0;i--){
        newArray.push(str_inputt[i]) 
    };
    console.log(newArray);
    let newString = newArray.join('') ;
    
    
    
    
    
    
    console.log(newString);;
    }
    let str_input= 'data';
    let str_inputt=str_input.split('');
    let newArray = [];
    console.log(str_inputt); 
    for(let i=str_inputt.length-1 ;i>=0;i--){
        newArray.push(str_inputt[i]) 
    };
    console.log(newArray);
    let newString = newArray.join('') ;
    console.log(newString);
    
    
    
    
    // Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)
    // Đầu vào: str
    // Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
    // Ví dụ
    // Cho "this is Test"; In ra "This Is Test"
    // Cho "hello a"; In ra "Hello A”
        let str = 'this is test';
        let strArr=str.split(" ");
        console.log(strArr);
        let word = [];
        for(var i=0;i<strArr.length;i++){
        let word1 = strArr[i];
        newWord = word1.charAt(0).toUpperCase()+ word1.slice(1);
        console.log(newWord)
        word.push(newWord)
        };
        console.log(word.join(' '))
        
    
    
    
    
    
        let str = 'hello a';
        let strArr=str.split(" ");
        console.log(strArr);
        let word = [];
        for(var i=0;i<strArr.length;i++){
        let word1 = strArr[i];
        newWord = word1.charAt(0).toUpperCase()+ word1.slice(1);
        console.log(newWord)
        word.push(newWord)
        };
        console.log(word.join(' '))
        
    
    
    
    
    // Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
    // Đầu vào: 1 mảng
    // Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
    // Ví dụ
    // Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
    // Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
    
    
    
    function unique(arr) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
          if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
          }
        }
        return newArr
      }
      console.log(unique(['one','two','three','one','one','four','five','four','five','five']))
    
    
    
      function unique(arr) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
          if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
          }
        }
        return newArr
      }
      console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))
    
    // Bài 4 : Tạo dữ liệu của 3 nhân viên Air Data(gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
    
    
    
    let memberAirdata = [
        {name:'Hoang', ChucVu: 'FE', age: 23, wage:1000},
        {name:'Chung', ChucVU: 'Fs',age:22, wage: 2000},
        {name:'Huy', ChucVU: 'FA' ,age:21, wage: 3000}
    
    ]
    input = prompt('Create ');
    if(input.toLowerCase()==='c'){
           let inputNewItems = prompt ('Enter the name of the new item');
            memberAirdata.push(inputNewItems)
           alert('done');
           console.log(memberAirdata);
        }
    else if(input.toLowerCase()==='r'){
    for (i=0;i<memberAirdata.length;i++){
        console.log(i+1,memberAirdata[i]);
      }
    }
    else if (input.toLowerCase()==='u'){
        let inputNumber = prompt('Enter the posltion you want to update');
        let inputUpdate = prompt('Enter the new name');
        inputNumber=memberAirdata.splice(inputNumber-1,1,inputUpdate);
         alert('done');
        console.log(memberAirdata);
    }
    else if(input.toLowerCase()==='d'){
        let inputNumberdelete = prompt('Enter the positition to delete');
        alert('done')
        inputNumberdelete = memberAirdata.splice(inputNumberdelete-1,1)
         console.log(memberAirdata)
        }
        
    
    
    
    
    
    
    
    // Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
    // A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
    // Ví dụ
    // Ngày 30/4/2019 là ngày hợp lệ
    // Ngày 29/2/2019 là ngày không hợp lệ
    // Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
    // B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
    // Ví dụ
    // Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
    // Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021
    
    function checkDate() {
  var day = parseInt(prompt("Nhập ngày:"));
  var month = parseInt(prompt("Nhập tháng:"));
  var year = parseInt(prompt("Nhập năm:"));

  var maxDay;
  // Kiểm tra ngày tháng năm hợp lệ
  if (month == 2) {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
          maxDay = 29;
      } else {
          maxDay = 28;
      }
  } else if ([4, 6, 9, 11].includes(month)) {
      maxDay = 30;
  } else {
      maxDay = 31;
  }

  if (day < 1 || day > maxDay) {
      return "Ngày không hợp lệ";
  }

  // Tìm ngày tiếp theo
  var nextDay, nextMonth, nextYear;
  if (day == maxDay && month == 12) {
      nextDay = 1;
      nextMonth = 1;
      nextYear = year + 1;
  } else if (day == maxDay) {
      nextDay = 1;
      nextMonth = month + 1;
      nextYear = year;
  } else {
      nextDay = day + 1;
      nextMonth = month;
      nextYear = year;
  }

  // In thông tin ngày tiếp theo
  return "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear;
}
checkDate()
    
    
    
    
    
    
    // Lưu ý: Nộp bài test bằng link github
    
    
