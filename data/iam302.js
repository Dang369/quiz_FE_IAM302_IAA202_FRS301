window.QUIZ_COURSES = window.QUIZ_COURSES || {};
window.QUIZ_COURSES.IAM302 = {
  "code": "IAM302",
  "sections": [
    {
      "id": "iam_similar",
      "title": "Giống đáp án (Dễ nhầm)",
      "tag": "Giống đáp án",
      "slide_range": "Slide 004 - 007",
      "questions": [
        {
          "id": "IAM302_slide_004",
          "slide": "slide_004.png",
          "slide_webp": "slides/IAM302/slide_004.webp",
          "inline_webp": null,
          "question": "What is malware?",
          "options": {
            "A": "Software designed to protect computers",
            "B": "Software designed to harm computers",
            "C": "Software designed to optimize computer performance",
            "D": "Software designed to enhance computer security"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Malware là gì?",
          "vi_explanation": "B. Phần mềm được thiết kế để gây hại cho máy tính.\nMalware (malicious software) là thuật ngữ chỉ các phần mềm độc hại như virus, worm, trojan, ransomware và spyware, được tạo ra để phá hoại, đánh cắp dữ liệu hoặc làm gián đoạn hoạt động của hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_005",
          "slide": "slide_005.png",
          "slide_webp": "slides/IAM302/slide_005.webp",
          "inline_webp": null,
          "question": "What is a keylogger?",
          "options": {
            "A": "Software used to encrypt sensitive data",
            "B": "Software designed to track keyboard inputs",
            "C": "Software used to enhance computer graphics",
            "D": "Software designed to optimize internet speed"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Keylogger là gì?",
          "vi_explanation": "B. Phần mềm được thiết kế để theo dõi các phím được gõ trên bàn phím.\nKeylogger ghi lại mọi thao tác gõ phím của người dùng nhằm đánh cắp thông tin như tài khoản, mật khẩu hoặc dữ liệu nhạy cảm.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_006",
          "slide": "slide_006.png",
          "slide_webp": "slides/IAM302/slide_006.webp",
          "inline_webp": null,
          "question": "Which technique requires deliberately infecting a computer?",
          "options": {
            "A": "Host-based signatures",
            "B": "Antivirus signatures",
            "C": "Static analysis",
            "D": "Dynamic analysis",
            "E": "Network signatures"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Kỹ thuật nào yêu cầu phải cố ý lây nhiễm một máy tính?",
          "vi_explanation": "D. Phân tích động (Dynamic analysis).\nPhân tích động yêu cầu chạy hoặc thực thi mã độc trong một môi trường kiểm soát (sandbox hoặc máy ảo) để quan sát hành vi của nó, tức là phải để mã độc \"lây nhiễm\" hoặc hoạt động trên hệ thống thử nghiệm.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_007",
          "slide": "slide_007.png",
          "slide_webp": "slides/IAM302/slide_007.webp",
          "inline_webp": null,
          "question": "Which technique can find many infecting a computer a single point of measurement?",
          "options": {
            "A": "Host-based signatures",
            "B": "Antivirus signatures",
            "C": "Static analysis",
            "D": "Dynamic analysis",
            "E": "Network signatures"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Kỹ thuật nào có thể phát hiện nhiều trường hợp lây nhiễm từ một điểm giám sát duy nhất?",
          "vi_explanation": "E. Chữ ký mạng (Network signatures).\nChữ ký mạng giám sát lưu lượng mạng tại một điểm trung tâm (ví dụ IDS/IPS), nên có thể phát hiện nhiều máy bị nhiễm hoặc nhiều cuộc tấn công cùng lúc mà không cần cài phần mềm trên từng máy tính.",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_blank",
      "title": "Dấu _____ (Điền khuyết)",
      "tag": "Dấu _____",
      "slide_range": "Slide 009 - 033",
      "questions": [
        {
          "id": "IAM302_slide_009",
          "slide": "slide_009.png",
          "slide_webp": "slides/IAM302/slide_009.webp",
          "inline_webp": null,
          "question": "_______ is an online service that analyzes files and URLs for the detection of viruses, worms, trojans and other kinds of malicious content using antivirus engines and website scanners.",
          "options": {
            "A": "VirusTotal",
            "B": "ClamAV",
            "C": "Yara",
            "D": "Twitter’"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là dịch vụ trực tuyến phân tích tệp và URL để phát hiện virus, sâu máy tính (worms), trojan và các loại mã độc khác bằng nhiều công cụ chống virus và trình quét website.\nA. VirusTotal\nVirusTotal là dịch vụ trực tuyến cho phép tải lên tệp hoặc URL để quét bằng nhiều công cụ antivirus khác nhau nhằm phát hiện mã độc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_010",
          "slide": "slide_010.png",
          "slide_webp": "slides/IAM302/slide_010.webp",
          "inline_webp": null,
          "question": "_______ is a tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples.",
          "options": {
            "A": "Yara",
            "B": "ClamAV",
            "C": "Wireshark",
            "D": "Total virus"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là công cụ được thiết kế (nhưng không giới hạn) để giúp các nhà nghiên cứu mã độc nhận dạng và phân loại các mẫu malware.\nA. YARA\nYARA là công cụ tạo các quy tắc (rules) để nhận diện và phân loại malware dựa trên các mẫu chuỗi hoặc đặc điểm của tệp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_011",
          "slide": "slide_011.png",
          "slide_webp": "slides/IAM302/slide_011.webp",
          "inline_webp": null,
          "question": "_______ is piece of software that takes the original malware file and compresses it, thus making all the original code and data unreadable.",
          "options": {
            "A": "packers",
            "B": "winrar",
            "C": "compression tools",
            "D": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là phần mềm lấy tệp malware gốc và nén nó, khiến toàn bộ mã và dữ liệu gốc trở nên khó đọc.\nA. Packers\nPackers nén hoặc mã hóa tệp thực thi, làm cho mã gốc khó phân tích hơn và thường được malware sử dụng để né tránh việc phát hiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_012",
          "slide": "slide_012.png",
          "slide_webp": "slides/IAM302/slide_012.webp",
          "inline_webp": null,
          "question": "_______ can limit the impact of worms.",
          "options": {
            "A": "antivirus software, firewalls, patches",
            "B": "anti-spyware, firewalls, patches",
            "C": "anti-worm software, firewalls, patches",
            "D": "anti-malware",
            "E": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ có thể hạn chế tác động của sâu máy tính (worms).\nA. Phần mềm diệt virus, tường lửa và các bản vá bảo mật.\nAntivirus, firewall và cập nhật bản vá giúp ngăn chặn lây nhiễm, phát hiện và vá các lỗ hổng mà worm khai thác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_013",
          "slide": "slide_013.png",
          "slide_webp": "slides/IAM302/slide_013.webp",
          "inline_webp": null,
          "question": "_______ refers to finding and extracting forensic artifacts from a computer's physical memory, otherwise known as RAM.",
          "options": {
            "A": "Memory forensics",
            "B": "Computer forensics",
            "C": "Malware forensics",
            "D": "Malware analysis"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là quá trình tìm kiếm và trích xuất các bằng chứng pháp y từ bộ nhớ vật lý của máy tính (RAM).\nA. Memory forensics\nMemory forensics là kỹ thuật phân tích dữ liệu trong RAM để thu thập tiến trình, khóa mã hóa, kết nối mạng và các bằng chứng số khác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_014",
          "slide": "slide_014.png",
          "slide_webp": "slides/IAM302/slide_014.webp",
          "inline_webp": null,
          "question": "_______ refers to finding and extracting forensic artifacts from a computer's physical memory, otherwise known as RAM.",
          "options": {
            "A": "Memory forensics",
            "B": "Computer forensics",
            "C": "Malware forensics",
            "D": "Malware analysis"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là quá trình tìm kiếm và trích xuất các bằng chứng pháp y từ bộ nhớ vật lý của máy tính (RAM).\nA. Memory forensics\nMemory forensics tập trung vào việc phân tích bản sao bộ nhớ (memory dump) nhằm tìm ra các dấu vết của malware hoặc hoạt động của hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_015",
          "slide": "slide_015.png",
          "slide_webp": "slides/IAM302/slide_015.webp",
          "inline_webp": null,
          "question": "_______ channels are methods for transferring data in an unmonitored manner.",
          "options": {
            "A": "Known",
            "B": "Wireless",
            "C": "Covert",
            "D": "Fiber-optic",
            "E": "None of the other choices"
          },
          "correct": [
            "C"
          ],
          "vi_question": "",
          "vi_explanation": "_____ channels là các phương thức truyền dữ liệu theo cách không bị giám sát.\nC. Covert\nCovert channels là các kênh truyền dữ liệu bí mật, được sử dụng để trao đổi thông tin mà không bị các cơ chế giám sát thông thường phát hiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_016",
          "slide": "slide_016.png",
          "slide_webp": "slides/IAM302/slide_016.webp",
          "inline_webp": null,
          "question": "_______ can dump a process's executable.",
          "options": {
            "A": "procdump",
            "B": "dlidump",
            "C": "memdump",
            "D": "hibr2bin"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ có thể trích xuất (dump) tệp thực thi của một tiến trình.\nA. procdump\nProcDump của Microsoft Sysinternals có thể tạo bản dump của tiến trình đang chạy để phục vụ phân tích và gỡ lỗi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_017",
          "slide": "slide_017.png",
          "slide_webp": "slides/IAM302/slide_017.webp",
          "inline_webp": null,
          "question": "_______ are usually the tool of choice for dynamic analysis.",
          "options": {
            "A": "Debugger",
            "B": "Decompiler",
            "C": "Disassembler",
            "D": "All of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ thường là công cụ được lựa chọn cho phân tích động (dynamic analysis).\nA. Debugger\nDebugger cho phép chạy từng bước chương trình, theo dõi thanh ghi, bộ nhớ và luồng thực thi nên là công cụ quan trọng trong phân tích động.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_018",
          "slide": "slide_018.png",
          "slide_webp": "slides/IAM302/slide_018.webp",
          "inline_webp": null,
          "question": "_______ are debuggers.",
          "options": {
            "A": "OllyDbg",
            "B": "WinDbg",
            "C": "Microsoft Visual Studio Debugger",
            "D": "All of the other choices"
          },
          "correct": [
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là các trình gỡ lỗi (debuggers).\nD. All of the other choices\nOllyDbg, WinDbg và Microsoft Visual Studio Debugger đều là các công cụ gỡ lỗi được sử dụng để phân tích chương trình và malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_019",
          "slide": "slide_019.png",
          "slide_webp": "slides/IAM302/slide_019.webp",
          "inline_webp": null,
          "question": "_______ are pieces of info hidden as metadata on files on NTFS drives.",
          "options": {
            "A": "Alternate data streams (ADS)",
            "B": "text data",
            "C": "video data",
            "D": "a data in Linux system"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là các thông tin được ẩn dưới dạng siêu dữ liệu trên các tệp của ổ đĩa NTFS.\nA. Alternate Data Streams (ADS)\nADS là tính năng của hệ thống tệp NTFS cho phép lưu dữ liệu bổ sung mà không hiển thị như một tệp thông thường.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_020",
          "slide": "slide_020.png",
          "slide_webp": "slides/IAM302/slide_020.webp",
          "inline_webp": null,
          "question": "_______ is forensic analysis of a computer's memory dump.",
          "options": {
            "A": "Memory forensics",
            "B": "Registry forensics",
            "C": "RegRipper",
            "D": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ là quá trình phân tích pháp y đối với bản sao bộ nhớ (memory dump) của máy tính.\nA. Memory forensics\nMemory forensics phân tích file dump của RAM để tìm bằng chứng về tiến trình, malware và hoạt động của hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_021",
          "slide": "slide_021.png",
          "slide_webp": "slides/IAM302/slide_021.webp",
          "inline_webp": null,
          "question": "_______ can print list of loaded dlls for each process.",
          "options": {
            "A": "dlllist",
            "B": "pslist",
            "C": "pstree",
            "D": "win64dd"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ có thể in danh sách các DLL đã được nạp cho từng tiến trình.\nA. dlllist\ndlllist là plugin của Volatility dùng để liệt kê các DLL đã được nạp trong từng tiến trình của bản dump bộ nhớ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_022",
          "slide": "slide_022.png",
          "slide_webp": "slides/IAM302/slide_022.webp",
          "inline_webp": null,
          "question": "_______ can be considered a self-extracting archive, where compressed data is packaged along with the relevant decompression code in an executable file.",
          "options": {
            "A": "Runtime packer",
            "B": "No-runtime packer",
            "C": "a data file",
            "D": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "_____ có thể được xem như một tệp tự giải nén, trong đó dữ liệu đã nén được đóng gói cùng với mã giải nén trong một tệp thực thi.\nA. Runtime packer\nRuntime packer nén mã chương trình và chỉ giải nén khi chương trình được thực thi, giúp che giấu nội dung của tệp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_023",
          "slide": "slide_023.png",
          "slide_webp": "slides/IAM302/slide_023.webp",
          "inline_webp": null,
          "question": "Which the following methods are often used in SRE, except :",
          "options": {
            "A": "Disassemble",
            "B": "Decompilation",
            "C": "Debuggers",
            "D": "Decode"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Những phương pháp nào sau đây thường được sử dụng trong Kỹ thuật đảo ngược phần mềm (SRE), ngoại trừ :",
          "vi_explanation": "D. Decode\nCác phương pháp phổ biến trong SRE là disassembly, decompilation và debugging. \"Decode\" không được xem là một phương pháp SRE chuẩn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_024",
          "slide": "slide_024.png",
          "slide_webp": "slides/IAM302/slide_024.webp",
          "inline_webp": null,
          "question": "A botnet is :",
          "options": {
            "A": "a computer virus that replicates and spreads itself from computer to computer via e-mail and other Internet traffic.",
            "B": "software that gives you administrator rights to a computer or network.",
            "C": "an exact copy or snapshot of the contents of an electronic medium.",
            "D": "a collection of computers that have been infected with blocks of code that can run automatically by themselves."
          },
          "correct": [
            "D"
          ],
          "vi_question": "Botnet là gì?",
          "vi_explanation": "D. Một tập hợp các máy tính đã bị lây nhiễm mã độc và có thể tự động thực hiện các lệnh.\nBotnet là mạng lưới các máy tính bị kiểm soát bởi malware (bot) và thường được kẻ tấn công sử dụng để thực hiện DDoS, gửi thư rác hoặc phát tán mã độc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_025",
          "slide": "slide_025.png",
          "slide_webp": "slides/IAM302/slide_025.webp",
          "inline_webp": null,
          "question": "Compilers translate high-level programs to machine code .",
          "options": {
            "A": "directly",
            "B": "indirectly via an assembler",
            "C": "either directly, or indirectly via an assembler",
            "D": "None of the other choices"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Trình biên dịch (Compiler) dịch chương trình bậc cao sang mã máy bằng cách nào?",
          "vi_explanation": "C. Có thể dịch trực tiếp hoặc gián tiếp thông qua trình hợp dịch (assembler).\nTùy theo trình biên dịch và kiến trúc hệ thống, compiler có thể sinh trực tiếp mã máy hoặc sinh mã hợp ngữ rồi dùng assembler để tạo mã máy",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_026",
          "slide": "slide_026.png",
          "slide_webp": "slides/IAM302/slide_026.webp",
          "inline_webp": null,
          "question": "Computer program performed the reverse operation by converting it into Assembly language is known as",
          "options": {
            "A": "Disassemble",
            "B": "Decompilation",
            "C": "Debuggers",
            "D": "All of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Chương trình thực hiện thao tác ngược lại bằng cách chuyển mã máy thành ngôn ngữ Assembly được gọi là gì?",
          "vi_explanation": "A. Disassemble (Trình dịch ngược sang Assembly)\nDisassembler chuyển mã máy (machine code) thành mã Assembly để hỗ trợ phân tích và kỹ thuật đảo ngược.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_027",
          "slide": "slide_027.png",
          "slide_webp": "slides/IAM302/slide_027.webp",
          "inline_webp": null,
          "question": "_______ x86 is a(n) architecture.",
          "options": {
            "A": "RISC",
            "B": "CISC",
            "C": "ARM",
            "D": "x64"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Kiến trúc x86 là kiến trúc thuộc loại nào?",
          "vi_explanation": "B. CISC\nx86 là kiến trúc CISC (Complex Instruction Set Computer) với tập lệnh phức tạp, khác với ARM là kiến trúc RISC.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_028",
          "slide": "slide_028.png",
          "slide_webp": "slides/IAM302/slide_028.webp",
          "inline_webp": null,
          "question": "Hackers who legitimately, with the knowledge of the owners of the IT system, try to break in to find and fix vulnerable areas of the system are called :",
          "options": {
            "A": "thrill-seeker hackers",
            "B": "hacktivists",
            "C": "script kiddies",
            "D": "counter hackers"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Những hacker được phép bởi chủ sở hữu hệ thống CNTT để kiểm tra và tìm lỗ hổng bảo mật được gọi là gì?",
          "vi_explanation": "D. Counter hackers\nCounter hackers (còn gọi là ethical hackers hoặc white-hat hackers trong nhiều tài liệu) kiểm tra hệ thống với sự cho phép của chủ sở hữu nhằm phát hiện và khắc phục lỗ hổng bảo mật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_029",
          "slide": "slide_029.png",
          "slide_webp": "slides/IAM302/slide_029.webp",
          "inline_webp": null,
          "question": "Once you know the offset of the NTFS partition, you can run to enumerate files.",
          "options": {
            "A": "fls",
            "B": "mmls",
            "C": "find",
            "D": "rm"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Sau khi biết offset của phân vùng NTFS, có thể chạy lệnh nào để liệt kê các tệp?",
          "vi_explanation": "A. fls\nfls là công cụ trong bộ Sleuth Kit dùng để liệt kê các tệp và thư mục từ hệ thống tệp khi đã biết offset của phân vùng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_030",
          "slide": "slide_030.png",
          "slide_webp": "slides/IAM302/slide_030.webp",
          "inline_webp": null,
          "question": "The package by Thomas Hungenberg and Matthias Eckert not only handles logging, but it simulates various services that malware frequently expects to interact with.",
          "options": {
            "A": "INetSim",
            "B": "GNS3",
            "C": "Wireshark",
            "D": "nmap"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Gói phần mềm _____ của Thomas Hungenberg và Matthias Eckert không chỉ ghi log mà còn mô phỏng nhiều dịch vụ mà malware thường tương tác.\nA. INetSim\nINetSim mô phỏng các dịch vụ Internet như HTTP, FTP, DNS, SMTP... để phục vụ phân tích malware trong môi trường an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_031",
          "slide": "slide_031.png",
          "slide_webp": "slides/IAM302/slide_031.webp",
          "inline_webp": null,
          "question": "Trojans are designed to be small and stealthy in order to ;",
          "options": {
            "A": "bypass covert channels",
            "B": "bypass firewalls",
            "C": "bypass permissions",
            "D": "bypass detection",
            "E": "None of the other choices"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Trojan được thiết kế nhỏ gọn và khó bị phát hiện nhằm mục đích gì?",
          "vi_explanation": "D. Vượt qua sự phát hiện.\nTrojan thường được thiết kế để hoạt động bí mật, tránh bị phần mềm bảo mật hoặc người dùng phát hiện trong thời gian dài.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_032",
          "slide": "slide_032.png",
          "slide_webp": "slides/IAM302/slide_032.webp",
          "inline_webp": null,
          "question": "The intention of is to frighten users into buying something.",
          "options": {
            "A": "Scareware",
            "B": "Rootkit",
            "C": "Botnet",
            "D": "Backdoor"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Mục đích của _____ là khiến người dùng sợ hãi để mua một sản phẩm.\nA. Scareware\nScareware hiển thị các cảnh báo giả về virus hoặc lỗi hệ thống để lừa người dùng mua phần mềm hoặc dịch vụ không cần thiết.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_033",
          "slide": "slide_033.png",
          "slide_webp": "slides/IAM302/slide_033.webp",
          "inline_webp": null,
          "question": "_______ a VirusTotal is .",
          "options": {
            "A": "a virus signature database.",
            "B": "dynamic analysis.",
            "C": "static analysis.",
            "D": "None of the mentioned."
          },
          "correct": [
            "D"
          ],
          "vi_question": "VirusTotal là gì?",
          "vi_explanation": "D. Không có đáp án nào ở trên.\nVirusTotal là một dịch vụ trực tuyến phân tích tệp và URL bằng nhiều công cụ chống virus khác nhau. Nó không phải là cơ sở dữ liệu chữ ký virus (A), cũng không phải là kỹ thuật phân tích động (B) hay phân tích tĩnh (C), vì vậy đáp án đúng là D.",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_exercise",
      "title": "Bài tập & Code thực hành",
      "tag": "Bài tập",
      "slide_range": "Slide 035 - 041",
      "questions": [
        {
          "id": "IAM302_slide_035",
          "slide": "slide_035.png",
          "slide_webp": "slides/IAM302/slide_035.webp",
          "inline_webp": "slides_inline/IAM302/slide_035.webp",
          "question": "Which type of packers is used to pack cbzvl.exe?",
          "options": {
            "A": "ASPack",
            "B": "UPX",
            "C": "No packer is used",
            "D": "Method 2 [ZIP SFX]"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "B. UPX\nGiải thích:\nTrong ảnh PEiD hiển thị:\nEP Section: UPX1\nĐây là dấu hiệu đặc trưng của UPX packer.\nVì vậy file được đóng gói bằng UPX.",
          "has_visual": true
        },
        {
          "id": "IAM302_slide_036",
          "slide": "slide_036.png",
          "slide_webp": "slides/IAM302/slide_036.webp",
          "inline_webp": null,
          "question": "What is the output of the following code?\n\nnums = [1, 2, 3]\nprint(nums)",
          "options": {
            "A": "[1, 2, 3]",
            "B": "1 2 3",
            "C": "[1 2 3]",
            "D": "1, 2, 3"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Kết quả của đoạn mã sau là gì?",
          "vi_explanation": "A. [1, 2, 3]\nnums là một list Python, khi print(nums) sẽ in ra đúng dạng biểu diễn của list gồm dấu ngoặc vuông và dấu phẩy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_037",
          "slide": "slide_037.png",
          "slide_webp": "slides/IAM302/slide_037.webp",
          "inline_webp": null,
          "question": "What will be the output of the following Python code?\n\nx = [[0], [1]]\nprint(\"\".join(list(map(str, x))))",
          "options": {
            "A": "01",
            "B": "[0] [1]",
            "C": "('01')",
            "D": "('[0] [1]',)"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Kết quả của đoạn mã Python sau là gì?",
          "vi_explanation": "Không có đáp án nào đúng. Kết quả đúng là: [0][1]\nmap(str, x) biến [0] thành chuỗi \"[0]\" và [1] thành chuỗi \"[1]\"; \"\".join(...) nối hai chuỗi lại thành [0][1].",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_038",
          "slide": "slide_038.png",
          "slide_webp": "slides/IAM302/slide_038.webp",
          "inline_webp": null,
          "question": "Int b=1; main(){int x = 2; printf(\"%d %d\", x, b);}\nIn this program, what ASM opcode causes eip to move to the printf entry point?",
          "options": {
            "A": "jz",
            "B": "amp",
            "C": "push",
            "D": "pop",
            "E": "call"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Trong chương trình này, opcode ASM nào làm EIP chuyển đến điểm vào của hàm printf?",
          "vi_explanation": "E. call\nLệnh call chuyển luồng thực thi đến hàm được gọi, ví dụ printf, đồng thời lưu địa chỉ quay lại trên stack.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_039",
          "slide": "slide_039.png",
          "slide_webp": "slides/IAM302/slide_039.webp",
          "inline_webp": null,
          "question": "sigtool --md5 test.exe > test.hdb\ncat test.hdb\n48c4533230e1ae1c118c741c0db19dfb:17387:test.exe\nclamscan -d test.hdb test.exe\n\nWhat type is used to customize signatures for ClamAV?",
          "options": {
            "A": "Hash-based signatures",
            "B": "ASCII Signatures",
            "C": "Logic signatures",
            "D": "Binary signatures"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Loại chữ ký nào được dùng để tùy chỉnh chữ ký cho ClamAV trong ví dụ trên?",
          "vi_explanation": "A. Hash-based signatures\nLệnh sigtool --md5 tạo chữ ký dựa trên mã băm MD5 trong file .hdb, nên đây là hash-based signature.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_040",
          "slide": "slide_040.png",
          "slide_webp": "slides/IAM302/slide_040.webp",
          "inline_webp": null,
          "question": "What is the result of sorted([-4, 1, -2, 3], key=abs, reverse=True)?",
          "options": {
            "A": "[-4, 3, -2, 1]",
            "B": "[3, 1, -2, -4]",
            "C": "[1, -2, 3, -4]",
            "D": "[-4, -2, 1, 3]"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_041",
          "slide": "slide_041.png",
          "slide_webp": "slides/IAM302/slide_041.webp",
          "inline_webp": null,
          "question": "What will be the output of the following Python code?\n\ndef foo():\n    try:\n        return 1\n    finally:\n        return 2\n\nk = foo()\nprint(k)",
          "options": {
            "A": "error, there is more than one return statement in a single try-finally block",
            "B": "3",
            "C": "2",
            "D": "1"
          },
          "correct": [
            "C"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_multi",
      "title": "Nhiều đáp án (Multi-select)",
      "tag": "Nhiều đáp án",
      "slide_range": "Slide 043 - 047",
      "questions": [
        {
          "id": "IAM302_slide_043",
          "slide": "slide_043.png",
          "slide_webp": "slides/IAM302/slide_043.webp",
          "inline_webp": null,
          "question": "What are two characteristics of a sandbox? (Choose two.)",
          "options": {
            "A": "A sandbox only provides completely independent protection of IOT devices.",
            "B": "If something unexpected or malicious happens, it affects only the sandbox.",
            "C": "A sandbox provides full network security.",
            "D": "A sandbox confines the actions of code to the sandbox device and in isolation to the rest of the network."
          },
          "correct": [
            "B",
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "B và D\nHai đặc điểm của một sandbox là gì? (Chọn hai đáp án)\nB. Nếu có điều gì bất thường hoặc độc hại xảy ra thì chỉ ảnh hưởng đến sandbox.\nD. Sandbox giới hạn hoạt động của mã trong môi trường cô lập, tách biệt với phần còn lại của mạng.\nSandbox là môi trường cô lập để chạy và phân tích các tệp hoặc chương trình nghi ngờ. Nếu mã độc được thực thi, nó chỉ ảnh hưởng trong sandbox và không lan sang hệ thống hoặc mạng thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_044",
          "slide": "slide_044.png",
          "slide_webp": "slides/IAM302/slide_044.webp",
          "inline_webp": null,
          "question": "For which two reasons was the sandbox solution added to network security? (Choose two.)",
          "options": {
            "A": "Firewalls were quite sufficient but better risk management was needed.",
            "B": "Firewalls and AVs were helpless against unknown threats.",
            "C": "Unknown threats needed to be quarantined.",
            "D": "AVs were able to stop unknown threats, but firewalls could not."
          },
          "correct": [
            "B",
            "C"
          ],
          "vi_question": "",
          "vi_explanation": "B và C\nVì hai lý do nào mà giải pháp sandbox được bổ sung vào hệ thống bảo mật mạng? (Chọn hai đáp án)\nB. Tường lửa (Firewall) và phần mềm diệt virus (AV) không thể chống lại các mối đe dọa chưa biết.\nC. Các mối đe dọa chưa biết cần được cách ly (quarantine).\nSandbox được bổ sung để phát hiện và phân tích các mối đe dọa mới (zero-day) mà firewall và antivirus truyền thống chưa có chữ ký nhận diện. chưa biết trước khi chúng ảnh hưởng đến hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_045",
          "slide": "slide_045.png",
          "slide_webp": "slides/IAM302/slide_045.webp",
          "inline_webp": null,
          "question": "Which two problems was network security experiencing before the introduction of a sandbox solution? (Choose two.)",
          "options": {
            "A": "Network security was unable to handle a coordinated attack using different threat vectors and methods.",
            "B": "AVs were not introduced into network security.",
            "C": "Security devices did not communicate with other security devices on the network.",
            "D": "Firewalls were non-existent."
          },
          "correct": [
            "A",
            "C"
          ],
          "vi_question": "",
          "vi_explanation": "A và C\nTrước khi có giải pháp sandbox, bảo mật mạng gặp hai vấn đề gì? (Chọn hai đáp án)\nA. Hệ thống bảo mật mạng không thể xử lý hiệu quả các cuộc tấn công phối hợp sử dụng nhiều phương thức và nhiều hướng tấn công khác nhau.\nC. Các thiết bị bảo mật không giao tiếp và chia sẻ thông tin với nhau trên mạng.\nTrước khi có sandbox và các giải pháp bảo mật tích hợp, các thiết bị như firewall, IDS/IPS và antivirus thường hoạt động riêng lẻ, khó phát hiện các cuộc tấn công phức tạp hoặc các mối đe dọa chưa biết.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_046",
          "slide": "slide_046.png",
          "slide_webp": "slides/IAM302/slide_046.webp",
          "inline_webp": null,
          "question": "YARA originally developed by Victor Alvarez of VirusTotal, stands for (choose two).",
          "options": {
            "A": "Another Recursive Acronym",
            "B": "Yet Another Recursive Acronym",
            "C": "Yes Another Recursive Acronym",
            "D": "Yet Another Ridiculous Acronym",
            "E": "Yes Another Ridiculous Acronym"
          },
          "correct": [
            "B",
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "B và D\nYARA, do Victor Alvarez của VirusTotal phát triển, là viết tắt của cụm từ nào? (Chọn hai đáp án)\nB. Yet Another Recursive Acronym\nD. Yet Another Ridiculous Acronym\nBan đầu, tác giả giải thích YARA là \"Yet Another Recursive Acronym\". Sau này, ông cũng đùa rằng nó có thể được hiểu là \"Yet Another Ridiculous Acronym\". Vì vậy cả B và D đều được chấp nhận trong tài liệu về YARA",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_047",
          "slide": "slide_047.png",
          "slide_webp": "slides/IAM302/slide_047.webp",
          "inline_webp": null,
          "question": "A malware analyst suspects EIP manipulation. Which vulnerability type might be exploited? (Choose two)",
          "options": {
            "A": "Integer overflow",
            "B": "Race condition",
            "C": "Buffer overflow",
            "D": "Format string attack"
          },
          "correct": [
            "C",
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_not",
      "title": "Dạng câu hỏi NOT",
      "tag": "NOT",
      "slide_range": "Slide 049 - 060",
      "questions": [
        {
          "id": "IAM302_slide_049",
          "slide": "slide_049.png",
          "slide_webp": "slides/IAM302/slide_049.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a recommended practice for preventing malware infections?",
          "options": {
            "A": "Using strong, unique passwords",
            "B": "Downloading software from unknown sources",
            "C": "Keeping software up-to-date",
            "D": "Being cautious of suspicious links and attachments"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là một biện pháp được khuyến nghị để phòng chống lây nhiễm malware?",
          "vi_explanation": "B. Tải phần mềm từ các nguồn không xác định.\nTải phần mềm từ nguồn không rõ ràng làm tăng nguy cơ nhiễm malware. Các biện pháp đúng là dùng mật khẩu mạnh, cập nhật phần mềm và cẩn trọng với liên kết hoặc tệp đính kèm đáng ngờ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_050",
          "slide": "slide_050.png",
          "slide_webp": "slides/IAM302/slide_050.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a common characteristic of malware?",
          "options": {
            "A": "Self-replication",
            "B": "Intended to protect computer systems",
            "C": "Harmful to computer systems",
            "D": "Can be spread through email attachments"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là đặc điểm phổ biến của malware?",
          "vi_explanation": "B. Được tạo ra để bảo vệ hệ thống máy tính.\nMalware được thiết kế để gây hại, đánh cắp dữ liệu hoặc phá hoại hệ thống, không phải để bảo vệ máy tính.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_051",
          "slide": "slide_051.png",
          "slide_webp": "slides/IAM302/slide_051.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a common tool used in reverse engineering malware?",
          "options": {
            "A": "IDA Pro",
            "B": "Wireshark",
            "C": "OllyDbg",
            "D": "Ghidra"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là công cụ thường dùng trong kỹ thuật đảo ngược (reverse engineering) malware?",
          "vi_explanation": "B. Wireshark\nIDA Pro, OllyDbg và Ghidra là các công cụ phân tích mã và dịch ngược. Wireshark là công cụ phân tích lưu lượng mạng, không phải công cụ reverse engineering.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_052",
          "slide": "slide_052.png",
          "slide_webp": "slides/IAM302/slide_052.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a common goal of malware analysis?",
          "options": {
            "A": "Identifying the source of malware",
            "B": "Developing antivirus software",
            "C": "Understanding malware behavior",
            "D": "Creating new types of malware"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là mục tiêu phổ biến của việc phân tích malware?",
          "vi_explanation": "D. Tạo ra các loại malware mới.\nPhân tích malware nhằm hiểu hành vi, xác định nguồn gốc và hỗ trợ phát triển biện pháp phòng chống, không nhằm tạo malware mới.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_053",
          "slide": "slide_053.png",
          "slide_webp": "slides/IAM302/slide_053.webp",
          "inline_webp": null,
          "question": "Which of the following is not a common goal of malware debugging?",
          "options": {
            "A": "Identifying the source of infection",
            "B": "Analyzing malware behavior",
            "C": "Developing new malware strains",
            "D": "Reverse engineering malware code EE GLELEELELELELELERERERESESES"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là mục tiêu phổ biến của việc gỡ lỗi (debugging) malware?",
          "vi_explanation": "C. Phát triển các biến thể malware mới.\nMalware debugging được dùng để quan sát hành vi, phân tích mã và hỗ trợ kỹ thuật đảo ngược, không nhằm phát triển malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_054",
          "slide": "slide_054.png",
          "slide_webp": "slides/IAM302/slide_054.webp",
          "inline_webp": null,
          "question": "Which of the following is not a commonly used tool in malware analysis?",
          "options": {
            "A": "Wireshark",
            "B": "IDA Pro",
            "C": "VirusTotal",
            "D": "Adobe Photoshop"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là công cụ thường dùng trong phân tích malware?",
          "vi_explanation": "D. Adobe Photoshop\nWireshark, IDA Pro và VirusTotal đều được sử dụng trong phân tích malware, còn Adobe Photoshop là phần mềm chỉnh sửa ảnh.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_055",
          "slide": "slide_055.png",
          "slide_webp": "slides/IAM302/slide_055.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT typically included in a forensic report?",
          "options": {
            "A": "Analysis of findings",
            "B": "Recommendations for future incident prevention",
            "C": "A list of all software installed on the system",
            "D": "Details of the forensic analysis methodology used"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Điều nào sau đây KHÔNG thường được đưa vào báo cáo pháp y số (forensic report)?",
          "vi_explanation": "C. Danh sách toàn bộ phần mềm được cài đặt trên hệ thống.\nBáo cáo pháp y thường bao gồm phương pháp phân tích, kết quả và khuyến nghị; danh sách toàn bộ phần mềm cài đặt không phải là nội dung bắt buộc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_056",
          "slide": "slide_056.png",
          "slide_webp": "slides/IAM302/slide_056.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a common step in the forensic analysis process?",
          "options": {
            "A": "Data collection",
            "B": "Data preservation",
            "C": "Data destruction",
            "D": "Data examination"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là một bước phổ biến trong quy trình phân tích pháp y số?",
          "vi_explanation": "C. Hủy dữ liệu (Data destruction).\nQuy trình pháp y bao gồm thu thập, bảo quản và phân tích dữ liệu. Việc hủy dữ liệu đi ngược lại mục tiêu bảo toàn chứng cứ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_057",
          "slide": "slide_057.png",
          "slide_webp": "slides/IAM302/slide_057.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a recommended practice for preventing malware infections?",
          "options": {
            "A": "Using strong, unique passwords",
            "B": "Downloading software from unknown sources",
            "C": "Keeping software up-to-date",
            "D": "Being cautious of suspicious links and attachments SE"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Điều nào sau đây KHÔNG phải là một biện pháp được khuyến nghị để phòng chống lây nhiễm malware?",
          "vi_explanation": "B. Tải phần mềm từ các nguồn không xác định.\nChỉ nên tải phần mềm từ các nguồn chính thức hoặc đáng tin cậy để giảm nguy cơ nhiễm mã độc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_059",
          "slide": "slide_059.png",
          "slide_webp": "slides/IAM302/slide_059.webp",
          "inline_webp": null,
          "question": "Which of the following statements about PEID is true?",
          "options": {
            "A": "It can only identify packers used in Windows executables.",
            "B": "It is a standalone antivirus software.",
            "C": "It requires an internet connection to function.",
            "D": "It can identify both packers and compilers used in executable files."
          },
          "correct": [
            "D"
          ],
          "vi_question": "Phát biểu nào sau đây về PEID là đúng?",
          "vi_explanation": "D. Nó có thể nhận diện cả packer và compiler được sử dụng trong các tệp thực thi.\nPEID là công cụ dùng để nhận diện packer, protector và nhiều compiler của các tệp thực thi Windows, hỗ trợ quá trình phân tích malware và reverse engineering.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_060",
          "slide": "slide_060.png",
          "slide_webp": "slides/IAM302/slide_060.webp",
          "inline_webp": null,
          "question": "Which of the following is NOT a key component of Malware Analysis?",
          "options": {
            "A": "Detection",
            "B": "Reverse Engineering",
            "C": "Eradication",
            "D": "Network Installation"
          },
          "correct": [
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_tf",
      "title": "Dạng True / False",
      "tag": "True/False",
      "slide_range": "Slide 062 - 077",
      "questions": [
        {
          "id": "IAM302_slide_062",
          "slide": "slide_062.png",
          "slide_webp": "slides/IAM302/slide_062.webp",
          "inline_webp": null,
          "question": "Attaching a debugger to a running process is particularly useful for analyzing malware effects on an already executing program.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Gắn (attach) debugger vào một tiến trình đang chạy đặc biệt hữu ích để phân tích ảnh hưởng của malware trên một chương trình đang thực thi.\nA. True\nViệc attach debugger cho phép phân tích hành vi của tiến trình đang chạy mà không cần khởi động lại chương trình, rất hữu ích trong phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_063",
          "slide": "slide_063.png",
          "slide_webp": "slides/IAM302/slide_063.webp",
          "inline_webp": null,
          "question": "Co _____________________________________________________________________ An advantage of using snapshots is that the investigator can repeat behavioral experiments without restarting the analysis from the beginning.",
          "options": {
            "A": "True",
            "B": "False GGG"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Một ưu điểm của việc sử dụng snapshot là điều tra viên có thể lặp lại các thử nghiệm hành vi mà không cần bắt đầu lại từ đầu.\nA. True\nSnapshot cho phép khôi phục nhanh máy ảo về trạng thái ban đầu để thực hiện lại các thử nghiệm nhiều lần.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_064",
          "slide": "slide_064.png",
          "slide_webp": "slides/IAM302/slide_064.webp",
          "inline_webp": null,
          "question": "Attaching a debugger to a running process pauses all its threads, which is useful for debugging malware-affected processes.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Gắn debugger vào một tiến trình đang chạy sẽ tạm dừng tất cả các luồng (threads) của tiến trình, điều này hữu ích khi gỡ lỗi các tiến trình bị malware tác động.\nA. True\nKhi debugger được attach, các luồng của tiến trình thường bị tạm dừng để người phân tích có thể kiểm tra trạng thái chương trình.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_065",
          "slide": "slide_065.png",
          "slide_webp": "slides/IAM302/slide_065.webp",
          "inline_webp": null,
          "question": "Crossview-based rootkit detection tools generate information about a system in two or more ways and then look for discrepancies in the results.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Các công cụ phát hiện rootkit dựa trên Crossview tạo thông tin về hệ thống theo từ hai cách trở lên rồi tìm sự khác biệt giữa các kết quả.\nA. True\nCrossview detection so sánh kết quả từ nhiều phương pháp khác nhau để phát hiện các đối tượng bị rootkit che giấu.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_066",
          "slide": "slide_066.png",
          "slide_webp": "slides/IAM302/slide_066.webp",
          "inline_webp": null,
          "question": "OllyDbg is suitable for debugging kernel-level malware due to its popularity in malware analysis.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "OllyDbg phù hợp để gỡ lỗi malware ở mức kernel vì nó rất phổ biến trong phân tích malware.\nB. False\nOllyDbg chủ yếu dùng để gỡ lỗi chương trình ở user mode. Để phân tích malware ở kernel mode thường sử dụng WinDbg hoặc KD.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_067",
          "slide": "slide_067.png",
          "slide_webp": "slides/IAM302/slide_067.webp",
          "inline_webp": null,
          "question": "Malware analysis focuses solely on studying viruses.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Phân tích malware chỉ tập trung vào việc nghiên cứu virus.\nB. False\nMalware analysis nghiên cứu nhiều loại mã độc như virus, worm, trojan, ransomware, spyware, rootkit, botnet,...",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_068",
          "slide": "slide_068.png",
          "slide_webp": "slides/IAM302/slide_068.webp",
          "inline_webp": null,
          "question": "Scareware is harmless.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Scareware là vô hại.\nB. False\nScareware tạo các cảnh báo giả nhằm lừa người dùng mua phần mềm hoặc tiết lộ thông tin, nên được xem là một dạng phần mềm độc hại.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_069",
          "slide": "slide_069.png",
          "slide_webp": "slides/IAM302/slide_069.webp",
          "inline_webp": null,
          "question": "Rootkits can be installed only through a trojan and not by an intruder already on the system.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Rootkit chỉ có thể được cài đặt thông qua trojan và không thể do kẻ tấn công đã xâm nhập hệ thống cài đặt.\nB. False\nRootkit có thể được cài bởi trojan, bởi kẻ tấn công sau khi chiếm quyền hệ thống hoặc bằng nhiều phương thức khác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_070",
          "slide": "slide_070.png",
          "slide_webp": "slides/IAM302/slide_070.webp",
          "inline_webp": null,
          "question": "The Windows kernel tracks processes by assigning them a unique _EPROCESS structure that resides in a non-paged pool of kernel memory.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Windows kernel theo dõi các tiến trình bằng cách gán cho mỗi tiến trình một cấu trúc _EPROCESS duy nhất nằm trong vùng nhớ kernel không phân trang (non-paged pool).\nA. True\nMỗi tiến trình trong Windows đều được đại diện bởi một cấu trúc _EPROCESS để kernel quản lý.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_071",
          "slide": "slide_071.png",
          "slide_webp": "slides/IAM302/slide_071.webp",
          "inline_webp": null,
          "question": "The main purpose of sandbox analysis is to determine what programming language the malware is written in.",
          "options": {
            "A": "False",
            "B": "True"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Mục đích chính của phân tích bằng sandbox là xác định malware được viết bằng ngôn ngữ lập trình nào.\nA. False\nSandbox được sử dụng để quan sát hành vi của malware trong môi trường cô lập, không phải để xác định ngôn ngữ lập trình của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_072",
          "slide": "slide_072.png",
          "slide_webp": "slides/IAM302/slide_072.webp",
          "inline_webp": null,
          "question": "The document suggests that modern malware analysis can be done without any specialized environment or lab.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Tài liệu cho rằng việc phân tích malware hiện đại có thể được thực hiện mà không cần môi trường hoặc phòng thí nghiệm chuyên dụng.\nB. False\nPhân tích malware hiện đại nên được thực hiện trong môi trường chuyên dụng (lab, máy ảo, sandbox) để đảm bảo an toàn và tránh lây nhiễm sang hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_073",
          "slide": "slide_073.png",
          "slide_webp": "slides/IAM302/slide_073.webp",
          "inline_webp": null,
          "question": "Software keyloggers can sometimes be visible in the system's Task Manager.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "Software keylogger đôi khi có thể hiển thị trong Task Manager của hệ thống.\nA. True\n→ Đúng.\nMột số software keylogger chạy dưới dạng process thông thường nên có thể xuất hiện trong Task Manager, mặc dù các keylogger tinh vi có thể sử dụng kỹ thuật để che giấu hoạt động.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_074",
          "slide": "slide_074.png",
          "slide_webp": "slides/IAM302/slide_074.webp",
          "inline_webp": null,
          "question": "Copying and pasting a Python for loop with a blank line into the standard Python shell will always execute without errors.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Việc sao chép và dán một vòng lặp Python for có dòng trống vào Python shell tiêu chuẩn sẽ luôn luôn thực thi mà không có lỗi.\nB. False\n→ Sai.\nPython shell tương tác phụ thuộc vào cách khối lệnh và thụt lề được nhập. Dòng trống có thể được hiểu là kết thúc một khối lệnh, vì vậy không thể khẳng định rằng việc copy-paste như vậy luôn chạy không lỗi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_075",
          "slide": "slide_075.png",
          "slide_webp": "slides/IAM302/slide_075.webp",
          "inline_webp": null,
          "question": "Cuckoo Sandbox is a type of malware.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Cuckoo Sandbox là một loại malware.\nB. False\n→ Sai.\nCuckoo Sandbox là một nền tảng sandbox dùng để phân tích hành vi của malware, không phải bản thân nó là malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_076",
          "slide": "slide_076.png",
          "slide_webp": "slides/IAM302/slide_076.webp",
          "inline_webp": null,
          "question": "Behavioral analysis in a malware lab must always be conducted in real-time to be effective.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Behavioral analysis trong malware lab luôn phải được thực hiện theo thời gian thực (real-time) thì mới hiệu quả.\nB. False\n→ Sai.\nPhân tích hành vi có thể dựa trên dữ liệu, log và các artifact được thu thập trong quá trình thực thi; không nhất thiết nhà phân tích phải quan sát mọi thứ theo thời gian thực.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_077",
          "slide": "slide_077.png",
          "slide_webp": "slides/IAM302/slide_077.webp",
          "inline_webp": null,
          "question": "Memory forensics with Volatility requires analyzing the memory dump on the same computer where it was captured.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Memory forensics với Volatility yêu cầu phải phân tích memory dump trên chính máy tính mà memory dump đó được thu thập.\nB. False\n→ Sai.\nMemory dump có thể được chuyển sang một máy phân tích riêng có Volatility để kiểm tra. Việc phân tích không bắt buộc phải diễn ra trên máy nguồn đã tạo memory dump.",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_short",
      "title": "Câu ngắn (Thuật ngữ & Khái niệm)",
      "tag": "Câu ngắn",
      "slide_range": "Slide 079 - 194",
      "questions": [
        {
          "id": "IAM302_slide_079",
          "slide": "slide_079.png",
          "slide_webp": "slides/IAM302/slide_079.webp",
          "inline_webp": null,
          "question": "What is a common method to prevent malware infections on your computer?",
          "options": {
            "A": "Leaving your firewall disabled",
            "B": "Clicking on suspicious email attachments",
            "C": "Regularly updating antivirus software",
            "D": "Sharing passwords with friends"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một phương pháp phổ biến để ngăn ngừa máy tính bị nhiễm malware là gì?",
          "vi_explanation": "C. Thường xuyên cập nhật phần mềm diệt virus.\nViệc cập nhật antivirus giúp nhận diện các mối đe dọa mới và tăng khả năng bảo vệ hệ thống khỏi malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_080",
          "slide": "slide_080.png",
          "slide_webp": "slides/IAM302/slide_080.webp",
          "inline_webp": null,
          "question": "What is a common delivery method for malware?",
          "options": {
            "A": "Antivirus software",
            "B": "Secure websites",
            "C": "Infected USB drives",
            "D": "Software updates"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một phương thức phổ biến để phát tán malware là gì?",
          "vi_explanation": "C. USB bị nhiễm mã độc.\nMalware thường lây lan qua USB, email đính kèm độc hại, website giả mạo hoặc tải phần mềm không an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_081",
          "slide": "slide_081.png",
          "slide_webp": "slides/IAM302/slide_081.webp",
          "inline_webp": null,
          "question": "What is malware forensics primarily concerned with?",
          "options": {
            "A": "Identifying malware",
            "B": "Preventing malware infections",
            "C": "Recovering lost data",
            "D": "Enhancing system performance"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Malware forensics chủ yếu tập trung vào điều gì?",
          "vi_explanation": "A. Nhận diện malware.\nMalware forensics tập trung thu thập và phân tích bằng chứng liên quan đến malware để xác định đặc điểm và hành vi của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_082",
          "slide": "slide_082.png",
          "slide_webp": "slides/IAM302/slide_082.webp",
          "inline_webp": null,
          "question": "What is the purpose of dynamic malware analysis?",
          "options": {
            "A": "Identifying malware origins",
            "B": "Analyzing malware behavior in real-time",
            "C": "Decompiling malware code",
            "D": "Encrypting malware payloads I"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích của phân tích malware động (Dynamic Malware Analysis) là gì?",
          "vi_explanation": "B. Phân tích hành vi của malware trong thời gian thực.\nDynamic analysis thực thi malware trong môi trường an toàn để quan sát các hành vi như tạo tiến trình, sửa Registry hoặc kết nối mạng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_083",
          "slide": "slide_083.png",
          "slide_webp": "slides/IAM302/slide_083.webp",
          "inline_webp": null,
          "question": "What is malware analysis primarily concerned with?",
          "options": {
            "A": "Developing new types of malware",
            "B": "Understanding and dissecting malicious software",
            "C": "Creating antivirus software",
            "D": "Encrypting sensitive data"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Malware analysis chủ yếu tập trung vào điều gì?",
          "vi_explanation": "B. Hiểu và phân tích chi tiết phần mềm độc hại.\nMalware analysis nhằm xác định cách malware hoạt động, mục tiêu, kỹ thuật lẩn tránh và tác động của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_084",
          "slide": "slide_084.png",
          "slide_webp": "slides/IAM302/slide_084.webp",
          "inline_webp": null,
          "question": "What is one advantage of hardware breakpoints over software breakpoints?",
          "options": {
            "A": "Faster CPU execution",
            "B": "Requires admin access",
            "C": "No changes to code bytes",
            "D": "Works only on Linux"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một ưu điểm của hardware breakpoint so với software breakpoint là gì?",
          "vi_explanation": "C. Không làm thay đổi các byte mã lệnh.\nHardware breakpoint sử dụng thanh ghi debug của CPU nên không cần sửa mã chương trình, khó bị malware phát hiện hơn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_085",
          "slide": "slide_085.png",
          "slide_webp": "slides/IAM302/slide_085.webp",
          "inline_webp": null,
          "question": "What is the term for a malicious program that encrypts user files and demands payment for decryption?",
          "options": {
            "A": "Virus",
            "B": "Worm",
            "C": "Trojan",
            "D": "Ransomware"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Chương trình độc hại mã hóa các tệp của người dùng và yêu cầu trả tiền để giải mã được gọi là gì?",
          "vi_explanation": "D. Ransomware\nRansomware mã hóa dữ liệu của nạn nhân và yêu cầu tiền chuộc để cung cấp khóa giải mã.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_086",
          "slide": "slide_086.png",
          "slide_webp": "slides/IAM302/slide_086.webp",
          "inline_webp": null,
          "question": "What is a common evasion technique used by malware to avoid detection by antivirus software?",
          "options": {
            "A": "Encrypting its code",
            "B": "Providing fake error messages",
            "C": "Displaying pop-up ads",
            "D": "Deleting system files"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Một kỹ thuật phổ biến malware sử dụng để tránh bị antivirus phát hiện là gì?",
          "vi_explanation": "A. Mã hóa (Encrypting) mã của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_087",
          "slide": "slide_087.png",
          "slide_webp": "slides/IAM302/slide_087.webp",
          "inline_webp": null,
          "question": "What is one of the most common formats used for storing memory dumps in memory forensics?",
          "options": {
            "A": "TXT (Text)",
            "B": "DOCX (Microsoft Word)",
            "C": "RAW (Binary)",
            "D": "JPG (Image)"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một trong những định dạng phổ biến nhất để lưu memory dump trong điều tra bộ nhớ là gì?",
          "vi_explanation": "C. RAW (Binary)\nĐịnh dạng RAW lưu toàn bộ dữ liệu bộ nhớ dưới dạng nhị phân và được nhiều công cụ forensic hỗ trợ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_088",
          "slide": "slide_088.png",
          "slide_webp": "slides/IAM302/slide_088.webp",
          "inline_webp": null,
          "question": "What is the primary goal of most malware?",
          "options": {
            "A": "To improve computer performance",
            "B": "To steal sensitive information",
            "C": "To increase internet speed",
            "D": "To enhance user experience"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục tiêu chính của hầu hết malware là gì?",
          "vi_explanation": "B. Đánh cắp thông tin nhạy cảm.\nMalware thường nhằm đánh cắp tài khoản, mật khẩu, dữ liệu tài chính hoặc thông tin cá nhân của người dùng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_089",
          "slide": "slide_089.png",
          "slide_webp": "slides/IAM302/slide_089.webp",
          "inline_webp": null,
          "question": "What is the requirement for kernel-mode debugging?",
          "options": {
            "A": "Two computers connected together",
            "B": "VirtualBox must be installed",
            "C": "32-bit operating system",
            "D": "System must be in Safe Mode"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Yêu cầu để thực hiện kernel-mode debugging là gì?",
          "vi_explanation": "A. Hai máy tính được kết nối với nhau.\nKernel debugging truyền thống cần một máy mục tiêu và một máy chủ debugger kết nối qua cổng thích hợp (COM, USB, mạng...).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_090",
          "slide": "slide_090.png",
          "slide_webp": "slides/IAM302/slide_090.webp",
          "inline_webp": null,
          "question": "What are the two main phases of malware analysis mentioned in the dual-phased process?",
          "options": {
            "A": "Static and Encryption Analysis",
            "B": "Infection and Recovery Analysis",
            "C": "Behavioral and Code Analysis",
            "D": "Reverse Engineering and Compilation"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Hai giai đoạn chính của quy trình phân tích malware được đề cập là gì?",
          "vi_explanation": "C. Phân tích hành vi (Behavioral) và phân tích mã (Code Analysis).\nQuy trình thường bắt đầu bằng phân tích hành vi động, sau đó đi sâu vào phân tích mã để hiểu chi tiết malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_091",
          "slide": "slide_091.png",
          "slide_webp": "slides/IAM302/slide_091.webp",
          "inline_webp": null,
          "question": "What was a benefit of second generation sandbox technology?",
          "options": {
            "A": "Scanning of encrypted data streams",
            "B": "Automation and artificial intelligence (Al)",
            "C": "Faster network speeds",
            "D": "Timely sharing of threat intelligence"
          },
          "correct": [
            "D"
          ],
          "vi_question": "",
          "vi_explanation": "D. Timely sharing of threat intelligence\nGiải thích:\nSandbox thế hệ thứ hai nổi bật ở khả năng chia sẻ thông tin về mối đe dọa (Threat Intelligence) giữa các thiết bị bảo mật để tăng tốc độ phát hiện và ngăn chặn.\nA và B là các tính năng xuất hiện ở các thế hệ sau.\nC không liên quan đến Sandbox.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_092",
          "slide": "slide_092.png",
          "slide_webp": "slides/IAM302/slide_092.webp",
          "inline_webp": null,
          "question": "What file type has a header specifying sections like .text, .data, and .rsrc?",
          "options": {
            "A": "Packed",
            "B": "PE",
            "C": "Wrapper",
            "D": "EXE"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại tệp nào có header chứa các section như .text, .data và .rsrc?",
          "vi_explanation": "B. PE\nĐịnh dạng Portable Executable (PE) của Windows gồm các section như .text, .data, .rdata, .rsrc,...",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_093",
          "slide": "slide_093.png",
          "slide_webp": "slides/IAM302/slide_093.webp",
          "inline_webp": null,
          "question": "What does pip stand for python?",
          "options": {
            "A": "Pip Installs Python",
            "B": "Pip Installs Packages",
            "C": "Preferred Installer Program",
            "D": "All of the mentioned"
          },
          "correct": [
            "B"
          ],
          "vi_question": "pip trong Python là viết tắt của gì?",
          "vi_explanation": "B. Pip Installs Packages\nĐây là cách giải thích đệ quy (recursive acronym) phổ biến của pip, là công cụ quản lý và cài đặt các gói Python.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_094",
          "slide": "slide_094.png",
          "slide_webp": "slides/IAM302/slide_094.webp",
          "inline_webp": null,
          "question": "What does a debugger help malware analysts to do?",
          "options": {
            "A": "Encrypt malware code",
            "B": "Obfuscate malware behavior",
            "C": "Trace and analyze malware execution",
            "D": "Spread malware to other systems"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Debugger giúp các nhà phân tích malware làm gì?",
          "vi_explanation": "C. Theo dõi và phân tích quá trình thực thi của malware.\nDebugger cho phép chạy từng bước chương trình, theo dõi thanh ghi, bộ nhớ và luồng thực thi của malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_095",
          "slide": "slide_095.png",
          "slide_webp": "slides/IAM302/slide_095.webp",
          "inline_webp": null,
          "question": "What form of analysis involves running the possibly infected file?",
          "options": {
            "A": "Malware Analysis",
            "B": "Dynamic Analysis",
            "C": "Static Analysis",
            "D": "Virtual Analysis"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại phân tích nào yêu cầu chạy tệp có khả năng bị nhiễm malware?",
          "vi_explanation": "B. Dynamic Analysis\nDynamic analysis thực thi tệp trong môi trường an toàn để quan sát hành vi của malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_096",
          "slide": "slide_096.png",
          "slide_webp": "slides/IAM302/slide_096.webp",
          "inline_webp": null,
          "question": "What would the following Python snippet most likely be doing in a malware context? import base64 exec(base64.b64decode(payload))",
          "options": {
            "A": "Creating a GUI",
            "B": "Logging keystrokes",
            "C": "Obfuscating code execution",
            "D": "Establishing a socket connection"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đoạn mã Python sau nhiều khả năng đang làm gì trong bối cảnh malware?",
          "vi_explanation": "import base64\nexec(base64.b64decode(payload))\nC. Che giấu việc thực thi mã (Obfuscating code execution).\nMalware thường mã hóa mã nguồn bằng Base64 rồi giải mã và thực thi bằng exec() để gây khó khăn cho việc phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_097",
          "slide": "slide_097.png",
          "slide_webp": "slides/IAM302/slide_097.webp",
          "inline_webp": null,
          "question": "What kind of activities can Process Monitor track during malware analysis?",
          "options": {
            "A": "Only network traffic",
            "B": "Only software installations",
            "C": "System processes, file system activity, and registry changes",
            "D": "Only CPU usage"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Process Monitor có thể theo dõi những hoạt động nào trong quá trình phân tích malware?",
          "vi_explanation": "C. Tiến trình hệ thống, hoạt động của hệ thống tệp và thay đổi Registry.\nProcess Monitor ghi lại theo thời gian thực các hoạt động của tiến trình, file system và Registry.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_098",
          "slide": "slide_098.png",
          "slide_webp": "slides/IAM302/slide_098.webp",
          "inline_webp": null,
          "question": "What type of data does Process Monitor display in real-time?",
          "options": {
            "A": "CPU temperature",
            "B": "Network bandwidth usage",
            "C": "Registry and file system activity",
            "D": "Installed software list"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Process Monitor hiển thị loại dữ liệu nào theo thời gian thực?",
          "vi_explanation": "C. Hoạt động của Registry và hệ thống tệp.\nCông cụ hiển thị chi tiết các thao tác đọc/ghi file, Registry, tiến trình và luồng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_099",
          "slide": "slide_099.png",
          "slide_webp": "slides/IAM302/slide_099.webp",
          "inline_webp": null,
          "question": "What type of data does Process Monitor display in real-time?",
          "options": {
            "A": "CPU temperature",
            "B": "Network bandwidth usage",
            "C": "Registry and file system activity",
            "D": "Installed software list"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Process Monitor hiển thị loại dữ liệu nào theo thời gian thực?",
          "vi_explanation": "C. Hoạt động của Registry và hệ thống tệp.\nĐây là chức năng chính của Process Monitor trong bộ Sysinternals.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_100",
          "slide": "slide_100.png",
          "slide_webp": "slides/IAM302/slide_100.webp",
          "inline_webp": null,
          "question": "Which of the following is a common capability of malware?",
          "options": {
            "A": "Application debugging",
            "B": "Firewall enhancement",
            "C": "Command and Control functionality",
            "D": "Antivirus updates"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Khả năng nào sau đây là khả năng phổ biến của malware?",
          "vi_explanation": "C. Chức năng Command and Control (C&C).\nMalware thường liên lạc với máy chủ C&C để nhận lệnh, tải thêm mã độc hoặc gửi dữ liệu đánh cắp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_101",
          "slide": "slide_101.png",
          "slide_webp": "slides/IAM302/slide_101.webp",
          "inline_webp": null,
          "question": "Which of the following type of malware secretly gathers and transmits system information, often for advertising purposes?",
          "options": {
            "A": "Trojan horse",
            "B": "Virus",
            "C": "Worm",
            "D": "Spyware"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Loại malware nào bí mật thu thập và truyền thông tin hệ thống, thường phục vụ mục đích quảng cáo?",
          "vi_explanation": "D. Spyware\nSpyware theo dõi hoạt động của người dùng và gửi thông tin về máy chủ của kẻ tấn công mà không được phép.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_102",
          "slide": "slide_102.png",
          "slide_webp": "slides/IAM302/slide_102.webp",
          "inline_webp": null,
          "question": "Which of the following is a Python tuple?",
          "options": {
            "A": "{1,2,3}",
            "B": "{}",
            "C": "[1,2,3]",
            "D": "(1,2,3)"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Đâu là một tuple trong Python?",
          "vi_explanation": "D. (1, 2, 3)\nTuple trong Python được khai báo bằng dấu ngoặc đơn () và là kiểu dữ liệu không thể thay đổi (immutable).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_103",
          "slide": "slide_103.png",
          "slide_webp": "slides/IAM302/slide_103.webp",
          "inline_webp": null,
          "question": "Which of these libraries is required for malware that uses FTP?",
          "options": {
            "A": "Kernel32.dll",
            "B": "Advapi32.dll",
            "C": "User32.dll",
            "D": "WSock32.dll",
            "E": "Wininet.dll"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Malware sử dụng giao thức FTP thường cần thư viện nào?",
          "vi_explanation": "E. Wininet.dll\nWininet.dll cung cấp các API Internet của Windows, bao gồm FTP, HTTP và HTTPS, nên thường được malware sử dụng để truyền dữ liệu qua FTP.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_104",
          "slide": "slide_104.png",
          "slide_webp": "slides/IAM302/slide_104.webp",
          "inline_webp": null,
          "question": "Which of the following is a common technique used by packers to hide malware code?",
          "options": {
            "A": "Adding comments to the code",
            "B": "Renaming files randomly",
            "C": "Encrypting or compressing executable files",
            "D": "Disabling antivirus software"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào sau đây thường được packer sử dụng để che giấu mã malware?",
          "vi_explanation": "C. Mã hóa hoặc nén các tệp thực thi.\nPackers thường nén hoặc mã hóa file thực thi để che giấu mã gốc, khiến việc phân tích và phát hiện malware trở nên khó khăn hơn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_105",
          "slide": "slide_105.png",
          "slide_webp": "slides/IAM302/slide_105.webp",
          "inline_webp": null,
          "question": "Which of these libraries is not normally linked from executables and may indicate malicious intent?",
          "options": {
            "A": "Kernel32.dll",
            "B": "Advapi32.dll",
            "C": "User32.dll",
            "D": "Gdi32.dll",
            "E": "Ntdll.dll"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Thư viện nào sau đây thường không được liên kết trong các tệp thực thi thông thường và có thể là dấu hiệu của mã độc?",
          "vi_explanation": "E. Ntdll.dll\nKernel32.dll, Advapi32.dll, User32.dll và Gdi32.dll là các thư viện Windows rất phổ biến. Trong nhiều bài thực hành malware, Ntdll.dll được xem là dấu hiệu đáng chú ý vì malware thường gọi trực tiếp các Native API để né tránh cơ chế giám sát.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_106",
          "slide": "slide_106.png",
          "slide_webp": "slides/IAM302/slide_106.webp",
          "inline_webp": null,
          "question": "Which of the following is not a type of malware?",
          "options": {
            "A": "Virus",
            "B": "Trojan",
            "C": "Firewall",
            "D": "Worm"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Điều nào sau đây không phải là một loại malware?",
          "vi_explanation": "C. Firewall\nFirewall là phần mềm hoặc thiết bị bảo mật dùng để kiểm soát lưu lượng mạng, không phải là malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_107",
          "slide": "slide_107.png",
          "slide_webp": "slides/IAM302/slide_107.webp",
          "inline_webp": null,
          "question": "What type of file is shared by many different programs?",
          "options": {
            "A": "Packed",
            "B": "PE",
            "C": "Wrapper",
            "D": "EXE",
            "E": "DLL"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Loại tệp nào được nhiều chương trình khác nhau cùng sử dụng?",
          "vi_explanation": "E. DLL\nDLL (Dynamic Link Library) chứa các hàm và tài nguyên có thể được nhiều chương trình dùng chung.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_108",
          "slide": "slide_108.png",
          "slide_webp": "slides/IAM302/slide_108.webp",
          "inline_webp": null,
          "question": "What will be the output of the following Python expression? round(4.576)",
          "options": {
            "A": "4",
            "B": "4.6",
            "C": "5",
            "D": "45"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kết quả của biểu thức Python sau là gì?",
          "vi_explanation": "round(4.576)\nC. 5\nHàm round() không truyền tham số thứ hai sẽ làm tròn đến số nguyên gần nhất. 4.576 được làm tròn thành 5.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_109",
          "slide": "slide_109.png",
          "slide_webp": "slides/IAM302/slide_109.webp",
          "inline_webp": null,
          "question": "What type of language is bash shell script?",
          "options": {
            "A": "Low-level languages",
            "B": "Lowest languages",
            "C": "Machine code",
            "D": "Interpreted languages",
            "E": "Hardware"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Bash shell script thuộc loại ngôn ngữ nào?",
          "vi_explanation": "D. Interpreted languages\nBash script được thông dịch trực tiếp bởi Bash shell, không cần biên dịch thành mã máy trước khi thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_110",
          "slide": "slide_110.png",
          "slide_webp": "slides/IAM302/slide_110.webp",
          "inline_webp": null,
          "question": "Which of the following is a feature of stealth software keyloggers?",
          "options": {
            "A": "Displayed in the taskbar",
            "B": "Invisible in Task Manager",
            "C": "Only work on Linux",
            "D": "Require admin login"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Đặc điểm nào sau đây là của keylogger phần mềm dạng stealth?",
          "vi_explanation": "B. Không hiển thị trong Task Manager.\nStealth keylogger cố gắng ẩn tiến trình và hoạt động để tránh bị người dùng hoặc phần mềm bảo mật phát hiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_111",
          "slide": "slide_111.png",
          "slide_webp": "slides/IAM302/slide_111.webp",
          "inline_webp": null,
          "question": "Which of the following is a lightweight alternative to Wireshark for network traffic monitoring?",
          "options": {
            "A": "SmartSniff",
            "B": "INetSim",
            "C": "tcpdump",
            "D": "Honeyd"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Công cụ nào sau đây là lựa chọn nhẹ hơn Wireshark để giám sát lưu lượng mạng?",
          "vi_explanation": "A. SmartSniff\nSmartSniff là công cụ giám sát mạng nhỏ gọn trên Windows, phù hợp khi không cần đầy đủ tính năng như Wireshark.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_112",
          "slide": "slide_112.png",
          "slide_webp": "slides/IAM302/slide_112.webp",
          "inline_webp": null,
          "question": "Which of the following is a technique often used to obfuscate malware code?",
          "options": {
            "A": "Code signing",
            "B": "Encryption",
            "C": "Digital watermarking",
            "D": "Social engineering"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Kỹ thuật nào sau đây thường được dùng để làm rối (obfuscate) mã malware?",
          "vi_explanation": "B. Encryption\nMalware thường mã hóa mã lệnh hoặc chuỗi dữ liệu để tránh bị phát hiện và gây khó khăn cho việc phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_113",
          "slide": "slide_113.png",
          "slide_webp": "slides/IAM302/slide_113.webp",
          "inline_webp": null,
          "question": "Which of these contains the stack?",
          "options": {
            "A": "CPU",
            "B": "RAM",
            "C": "Control unit",
            "D": "Registers",
            "E": "ALU"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Stack được chứa ở đâu?",
          "vi_explanation": "B. RAM\nStack là một vùng nhớ trong RAM dùng để lưu biến cục bộ, địa chỉ trả về và tham số hàm khi chương trình thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_114",
          "slide": "slide_114.png",
          "slide_webp": "slides/IAM302/slide_114.webp",
          "inline_webp": null,
          "question": "Which of the following network tools can be used to redirect DNS-based connections for malware analysis?",
          "options": {
            "A": "CaptureBAT",
            "B": "MiniFake DNS",
            "C": "Process Monitor",
            "D": "tcpdump"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Công cụ mạng nào có thể được dùng để chuyển hướng các kết nối dựa trên DNS phục vụ phân tích malware?",
          "vi_explanation": "B. MiniFake DNS\nMiniFake DNS giả lập máy chủ DNS, chuyển hướng các truy vấn DNS của malware đến môi trường phân tích an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_115",
          "slide": "slide_115.png",
          "slide_webp": "slides/IAM302/slide_115.webp",
          "inline_webp": null,
          "question": "Which of the following is a technique often used to obfuscate malware code?",
          "options": {
            "A": "Code signing",
            "B": "Encryption",
            "C": "Digital watermarking",
            "D": "Social engineering"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Kỹ thuật nào sau đây thường được dùng để làm rối (obfuscate) mã malware?",
          "vi_explanation": "B. Encryption\nViệc mã hóa mã lệnh giúp malware thay đổi chữ ký và gây khó khăn cho việc phân tích tĩnh.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_116",
          "slide": "slide_116.png",
          "slide_webp": "slides/IAM302/slide_116.webp",
          "inline_webp": null,
          "question": "Which of the following is a common method used by malware to infect computers?",
          "options": {
            "A": "Opening suspicious email attachments",
            "B": "Installing antivirus software",
            "C": "Regularly updating operating systems",
            "D": "Using strong passwords"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Phương pháp nào sau đây thường được malware sử dụng để lây nhiễm máy tính?",
          "vi_explanation": "A. Mở các tệp đính kèm email đáng ngờ.\nEmail lừa đảo (phishing) với tệp đính kèm độc hại là một trong những con đường lây nhiễm malware phổ biến nhất.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_117",
          "slide": "slide_117.png",
          "slide_webp": "slides/IAM302/slide_117.webp",
          "inline_webp": null,
          "question": "Which of the following tools can be used to analyze PE files?",
          "options": {
            "A": "Wireshark, Metasploit",
            "B": "Word, Excel",
            "C": "xPELister, PEID, PE Tools",
            "D": "PUTTY, WinSCP"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Công cụ nào sau đây có thể được sử dụng để phân tích tệp PE?",
          "vi_explanation": "C. xPELister, PEiD, PE Tools\nĐây là các công cụ chuyên dùng để xem header, section, packer và các thông tin của tệp PE (Portable Executable).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_118",
          "slide": "slide_118.png",
          "slide_webp": "slides/IAM302/slide_118.webp",
          "inline_webp": null,
          "question": "Which of the following is not a commonly used tool in malware analysis?",
          "options": {
            "A": "Wireshark",
            "B": "IDA Pro",
            "C": "VirusTotal",
            "D": "Adobe Photoshop"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Công cụ nào sau đây không thường được sử dụng trong phân tích malware?",
          "vi_explanation": "D. Adobe Photoshop\nAdobe Photoshop là phần mềm chỉnh sửa ảnh, không phải công cụ phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_119",
          "slide": "slide_119.png",
          "slide_webp": "slides/IAM302/slide_119.webp",
          "inline_webp": null,
          "question": "Which of the following is a common technique used by packers to hide malware code?",
          "options": {
            "A": "Adding comments to the code",
            "B": "Renaming files randomly",
            "C": "Encrypting or compressing executable files",
            "D": "Disabling antivirus software"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào sau đây thường được packer sử dụng để che giấu mã malware?",
          "vi_explanation": "C. Mã hóa hoặc nén các tệp thực thi.\nPackers nén hoặc mã hóa file thực thi để che giấu mã gốc và gây khó khăn cho việc phân tích cũng như phát hiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_120",
          "slide": "slide_120.png",
          "slide_webp": "slides/IAM302/slide_120.webp",
          "inline_webp": null,
          "question": "Which of the following is a common malware feature mentioned in the lecture?",
          "options": {
            "A": "Signature randomization",
            "B": "Auto-sandbox escape",
            "C": "Infection and self-defense",
            "D": "Driver injection detection"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đặc điểm phổ biến nào của malware được đề cập trong bài giảng?",
          "vi_explanation": "C. Infection and self-defense\nMalware thường có khả năng lây nhiễm (infection) và tự bảo vệ (self-defense) để tránh bị phát hiện hoặc loại bỏ trong quá trình hoạt động.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_121",
          "slide": "slide_121.png",
          "slide_webp": "slides/IAM302/slide_121.webp",
          "inline_webp": null,
          "question": "Which of the following formats is a raw memory dump?",
          "options": {
            "A": "bin",
            "B": "img",
            "C": "zZip",
            "D": "sys"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Định dạng nào sau đây là bản sao bộ nhớ thô (raw memory dump)?",
          "vi_explanation": "A. bin\nTệp .bin thường lưu dữ liệu bộ nhớ dưới dạng nhị phân (RAW), được nhiều công cụ memory forensics sử dụng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_122",
          "slide": "slide_122.png",
          "slide_webp": "slides/IAM302/slide_122.webp",
          "inline_webp": null,
          "question": "Which of the following is a computer virus that replicates and spreads itself, not only from file to file, but from computer to computer via e-mail and other Internet traffic?",
          "options": {
            "A": "A worm",
            "B": "A zombie",
            "C": "A rootkit",
            "D": "A botnet"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Loại malware nào có khả năng tự sao chép và lây lan từ máy tính này sang máy tính khác thông qua email và lưu lượng Internet?",
          "vi_explanation": "A. A worm\nWorm là malware tự sao chép và lây lan qua mạng mà không cần người dùng thực thi tệp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_123",
          "slide": "slide_123.png",
          "slide_webp": "slides/IAM302/slide_123.webp",
          "inline_webp": null,
          "question": "Which of the following is not a common goal of malware debugging?",
          "options": {
            "A": "Identifying the source of infection",
            "B": "Analyzing malware behavior",
            "C": "Developing new malware strains",
            "D": "Reverse engineering malware code"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Điều nào sau đây không phải là mục tiêu phổ biến của việc gỡ lỗi (debugging) malware?",
          "vi_explanation": "C. Developing new malware strains\nMalware debugging nhằm phân tích hành vi và mã nguồn của malware, không nhằm phát triển malware mới.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_124",
          "slide": "slide_124.png",
          "slide_webp": "slides/IAM302/slide_124.webp",
          "inline_webp": null,
          "question": "Which of the following is a common technique used to detect malware infections on a system?",
          "options": {
            "A": "Running outdated antivirus software",
            "B": "Ignoring system logs",
            "C": "Conducting regular malware scans",
            "D": "Disabling firewall protection"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào sau đây thường được sử dụng để phát hiện malware trên hệ thống?",
          "vi_explanation": "C. Conducting regular malware scans\nQuét malware định kỳ bằng phần mềm bảo mật giúp phát hiện và loại bỏ mã độc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_125",
          "slide": "slide_125.png",
          "slide_webp": "slides/IAM302/slide_125.webp",
          "inline_webp": null,
          "question": "Which artifact is least likely to be retrieved from a RAM image?",
          "options": {
            "A": "Running process list",
            "B": "Encrypted emails",
            "C": "Kernel modules",
            "D": "Unused disk sectors"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Đối tượng nào ít có khả năng được thu thập từ ảnh bộ nhớ RAM?",
          "vi_explanation": "D. Unused disk sectors\nRAM chỉ chứa dữ liệu đang hoạt động; các sector chưa sử dụng của ổ cứng không nằm trong ảnh bộ nhớ RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_126",
          "slide": "slide_126.png",
          "slide_webp": "slides/IAM302/slide_126.webp",
          "inline_webp": null,
          "question": "Which debugger is commonly used for analyzing Windows-based malware?",
          "options": {
            "A": "GDB",
            "B": "OllyDbg",
            "C": "LLDB",
            "D": "WinDbg"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Trình gỡ lỗi nào thường được sử dụng để phân tích malware trên Windows?",
          "vi_explanation": "B. OllyDbg\nOllyDbg là debugger nổi tiếng dành cho phân tích malware ở chế độ user-mode trên Windows.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_127",
          "slide": "slide_127.png",
          "slide_webp": "slides/IAM302/slide_127.webp",
          "inline_webp": null,
          "question": "Which type of malware is designed to steal sensitive information such as credit card numbers and login credentials?",
          "options": {
            "A": "Spyware",
            "B": "KeywordLog",
            "C": "Botnet",
            "D": "Logic bomb"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Loại malware nào được thiết kế để đánh cắp thông tin nhạy cảm như số thẻ tín dụng và thông tin đăng nhập?",
          "vi_explanation": "A. Spyware\nSpyware bí mật thu thập và gửi thông tin người dùng cho kẻ tấn công.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_128",
          "slide": "slide_128.png",
          "slide_webp": "slides/IAM302/slide_128.webp",
          "inline_webp": null,
          "question": "Which command retrieves data from RAM?",
          "options": {
            "A": "mov eax, ebx",
            "B": "lea ecx, [edx+16]",
            "C": "mov ebx, [eax]",
            "D": "sub ecx, 3",
            "E": "push edx"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Lệnh nào lấy dữ liệu từ RAM?",
          "vi_explanation": "C. mov ebx, [eax]\nLệnh mov ebx, [eax] đọc dữ liệu từ địa chỉ bộ nhớ mà thanh ghi EAX trỏ tới và nạp vào EBX, tức là truy xuất dữ liệu từ RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_129",
          "slide": "slide_129.png",
          "slide_webp": "slides/IAM302/slide_129.webp",
          "inline_webp": null,
          "question": "Which command retrieves data from RAM?",
          "options": {
            "A": "mov eax, ebx",
            "B": "lea ecx, [edx+16]",
            "C": "mov ebx, [eax]",
            "D": "sub ecx, 3",
            "E": "push edx"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thành phần nào thường được malware sử dụng để kiểm tra xem nó đã chạy hay chưa?",
          "vi_explanation": "C. Mutex\nMalware thường tạo Mutex duy nhất; nếu Mutex đã tồn tại, malware biết rằng một bản sao khác đang chạy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_130",
          "slide": "slide_130.png",
          "slide_webp": "slides/IAM302/slide_130.webp",
          "inline_webp": null,
          "question": "Which item is open used by malware to check if the malware is already running?",
          "options": {
            "A": "DLL",
            "B": "Process",
            "C": "Mutex",
            "D": "Services",
            "E": "Component Object Model (COM)"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thành phần nào thường được malware sử dụng để kiểm tra xem nó đã chạy hay chưa?",
          "vi_explanation": "C. Mutex\nMalware thường tạo Mutex duy nhất; nếu Mutex đã tồn tại, malware biết rằng một bản sao khác đang chạy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_131",
          "slide": "slide_131.png",
          "slide_webp": "slides/IAM302/slide_131.webp",
          "inline_webp": null,
          "question": "Which form of analysis involves going through lines of code but never running the file in question?",
          "options": {
            "A": "Malware Analysis",
            "B": "Dynamic Analysis",
            "C": "Static Analysis",
            "D": "Virtual Analysis"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Hình thức phân tích nào đọc và phân tích mã nhưng không bao giờ thực thi tệp?",
          "vi_explanation": "C. Static Analysis\nStatic analysis phân tích mã, chuỗi, PE header và các đặc điểm khác mà không chạy malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_132",
          "slide": "slide_132.png",
          "slide_webp": "slides/IAM302/slide_132.webp",
          "inline_webp": null,
          "question": "Which type of malware is most associated with financial fraud through credential harvesting?",
          "options": {
            "A": "Logic Bomb",
            "B": "Adware",
            "C": "Spyware",
            "D": "Rootkit"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Loại malware nào thường liên quan nhất đến hành vi gian lận tài chính thông qua đánh cắp thông tin đăng nhập?",
          "vi_explanation": "C. Spyware\nSpyware thường thu thập tài khoản ngân hàng, mật khẩu và thông tin tài chính của người dùng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_133",
          "slide": "slide_133.png",
          "slide_webp": "slides/IAM302/slide_133.webp",
          "inline_webp": null,
          "question": "Which online sandbox allows users to upload malware samples for scanning with multiple antivirus engines?",
          "options": {
            "A": "Hybrid Analysis",
            "B": "Wireshark",
            "C": "VirusTotal",
            "D": "REMnux"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Sandbox trực tuyến nào cho phép người dùng tải mẫu malware lên để quét bằng nhiều công cụ antivirus?",
          "vi_explanation": "C. VirusTotal\nVirusTotal sử dụng nhiều antivirus engine để quét tệp và URL nhằm phát hiện malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_134",
          "slide": "slide_134.png",
          "slide_webp": "slides/IAM302/slide_134.webp",
          "inline_webp": null,
          "question": "Which instruction is repeated many times in buffer overflow attacks?",
          "options": {
            "A": "mov",
            "B": "sub",
            "C": "nop",
            "D": "push",
            "E": "pop"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Lệnh nào thường được lặp lại nhiều lần trong các cuộc tấn công buffer overflow?",
          "vi_explanation": "C. nop\nChuỗi NOP sled gồm nhiều lệnh NOP giúp tăng khả năng chương trình nhảy đúng vào shellcode.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_135",
          "slide": "slide_135.png",
          "slide_webp": "slides/IAM302/slide_135.webp",
          "inline_webp": null,
          "question": "Which instruction does nothing and is often used in buffer overflow padding?",
          "options": {
            "A": "ADD",
            "B": "LEA",
            "C": "NOP",
            "D": "RET"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Lệnh nào không thực hiện thao tác nào và thường được dùng để đệm trong buffer overflow?",
          "vi_explanation": "C. NOP\nNOP (No Operation) không làm thay đổi trạng thái CPU và thường được dùng để tạo NOP sled.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_136",
          "slide": "slide_136.png",
          "slide_webp": "slides/IAM302/slide_136.webp",
          "inline_webp": null,
          "question": "Which technique finds the readable text in a file?",
          "options": {
            "A": "Antivirus",
            "B": "Hashes",
            "C": "Strings",
            "D": "Functions"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào được dùng để tìm các chuỗi văn bản có thể đọc được trong một tệp?",
          "vi_explanation": "C. Strings\nCông cụ strings trích xuất các chuỗi ASCII hoặc Unicode từ tệp thực thi để hỗ trợ phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_137",
          "slide": "slide_137.png",
          "slide_webp": "slides/IAM302/slide_137.webp",
          "inline_webp": null,
          "question": "Which technique may alert attackers that you have detected an intrusion?",
          "options": {
            "A": "VirusTotal",
            "B": "strings",
            "C": "Disassembler",
            "D": "Debugger",
            "E": "Static analysis"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Kỹ thuật nào có thể khiến kẻ tấn công biết rằng bạn đã phát hiện sự xâm nhập?",
          "vi_explanation": "D. Debugger\nNhiều malware có cơ chế anti-debug; khi phát hiện debugger, chúng có thể thay đổi hành vi hoặc tự thoát, báo hiệu cho kẻ tấn công rằng mẫu đang bị phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_138",
          "slide": "slide_138.png",
          "slide_webp": "slides/IAM302/slide_138.webp",
          "inline_webp": null,
          "question": "Which tool is commonly used for dynamic malware analysis?",
          "options": {
            "A": "IDA Pro",
            "B": "Wireshark",
            "C": "OllyDbg",
            "D": "VirusTotal"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Công cụ nào thường được sử dụng cho phân tích malware động (dynamic analysis)?",
          "vi_explanation": "C. OllyDbg\nOllyDbg cho phép thực thi từng bước và quan sát hành vi của malware trong thời gian chạy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_139",
          "slide": "slide_139.png",
          "slide_webp": "slides/IAM302/slide_139.webp",
          "inline_webp": null,
          "question": "Which tool is used to detect shellcode in binary files via Immunity Debugger?",
          "options": {
            "A": "scd.py",
            "B": "Volatility",
            "C": "pymon.py",
            "D": "sigtool"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Công cụ nào được dùng để phát hiện shellcode trong tệp nhị phân thông qua Immunity Debugger?",
          "vi_explanation": "A. scd.py\nscd.py là plugin của Immunity Debugger dùng để phát hiện shellcode trong quá trình phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_140",
          "slide": "slide_140.png",
          "slide_webp": "slides/IAM302/slide_140.webp",
          "inline_webp": null,
          "question": "Which tool is commonly used for memory forensics?",
          "options": {
            "A": "Wireshark",
            "B": "Volatility",
            "C": "Snort",
            "D": "IDA Pro"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Công cụ nào thường được sử dụng trong điều tra pháp y bộ nhớ (memory forensics)?",
          "vi_explanation": "B. Volatility\nVolatility là framework phổ biến dùng để phân tích memory dump và trích xuất tiến trình, DLL, Registry, network connections,...",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_141",
          "slide": "slide_141.png",
          "slide_webp": "slides/IAM302/slide_141.webp",
          "inline_webp": null,
          "question": "Which type of code cannot be disassembled by IDA Pro Free?",
          "options": {
            "A": "C",
            "B": "x86",
            "C": "x64",
            "D": "Visual Basic",
            "E": "DLL"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Loại mã nào không thể được IDA Pro Free dịch ngược (disassemble)?",
          "vi_explanation": "C. x64\nTrong các phiên bản IDA Free truyền thống được sử dụng trong nhiều giáo trình malware, chỉ hỗ trợ x86; x64 không được hỗ trợ nên đáp án là C.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_142",
          "slide": "slide_142.png",
          "slide_webp": "slides/IAM302/slide_142.webp",
          "inline_webp": null,
          "question": "Which type of malware is designed to steal sensitive information such as credit card numbers and login credentials?",
          "options": {
            "A": "Spyware",
            "B": "KeywordLog",
            "C": "Botnet",
            "D": "Logic bomb"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Loại malware nào được thiết kế để đánh cắp thông tin nhạy cảm như số thẻ tín dụng và thông tin đăng nhập?",
          "vi_explanation": "A. Spyware\nSpyware bí mật thu thập thông tin của người dùng như tài khoản, mật khẩu và dữ liệu tài chính rồi gửi cho kẻ tấn công.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_143",
          "slide": "slide_143.png",
          "slide_webp": "slides/IAM302/slide_143.webp",
          "inline_webp": null,
          "question": "Which type of malware is designed to allow an attacker to control the infected system remotely?",
          "options": {
            "A": "Downloader",
            "B": "Backdoor",
            "C": "Scareware",
            "D": "Worm"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại malware nào được thiết kế để cho phép kẻ tấn công điều khiển hệ thống bị nhiễm từ xa?",
          "vi_explanation": "B. Backdoor\nBackdoor tạo một \"cửa hậu\" cho phép kẻ tấn công truy cập và điều khiển máy tính từ xa mà không cần xác thực hợp lệ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_144",
          "slide": "slide_144.png",
          "slide_webp": "slides/IAM302/slide_144.webp",
          "inline_webp": null,
          "question": "Which type of malware spreads rapidly through a network by exploiting vulnerabilities?",
          "options": {
            "A": "Trojan",
            "B": "Worm",
            "C": "Rootkit",
            "D": "Adware"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại malware nào lây lan nhanh qua mạng bằng cách khai thác các lỗ hổng bảo mật?",
          "vi_explanation": "B. Worm\nWorm có khả năng tự sao chép và tự lây lan qua mạng mà không cần người dùng thực hiện thao tác nào.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_145",
          "slide": "slide_145.png",
          "slide_webp": "slides/IAM302/slide_145.webp",
          "inline_webp": null,
          "question": "Which type of debugging is typically more challenging but provides deeper insights into system-level processes?",
          "options": {
            "A": "User-mode debugging",
            "B": "Kernel-mode debugging",
            "C": "Network debugging",
            "D": "Application debugging"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại gỡ lỗi nào thường khó thực hiện hơn nhưng cung cấp cái nhìn sâu hơn về các tiến trình ở mức hệ thống?",
          "vi_explanation": "B. Kernel-mode debugging\nKernel-mode debugging phân tích trực tiếp nhân hệ điều hành nên phức tạp hơn nhưng cho phép quan sát hoạt động ở mức thấp của hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_146",
          "slide": "slide_146.png",
          "slide_webp": "slides/IAM302/slide_146.webp",
          "inline_webp": null,
          "question": "Which register indicates whether the last operation resulted in zero?",
          "options": {
            "A": "EAX, EBX, ECX, or EDX",
            "B": "EBP or ESP",
            "C": "EFLAGS",
            "D": "EIP"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thanh ghi nào cho biết phép toán gần nhất có cho kết quả bằng 0 hay không?",
          "vi_explanation": "C. EFLAGS\nThanh ghi EFLAGS chứa cờ ZF (Zero Flag), được đặt khi kết quả của phép toán bằng 0.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_147",
          "slide": "slide_147.png",
          "slide_webp": "slides/IAM302/slide_147.webp",
          "inline_webp": null,
          "question": "Which tool is mentioned as part of the malware analysis environment setup?",
          "options": {
            "A": "Google Docs",
            "B": "WordPress",
            "C": "Forensic tools",
            "D": "Load balancers"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Công cụ nào được đề cập là một phần của môi trường thiết lập để phân tích malware?",
          "vi_explanation": "C. Forensic tools\nMôi trường phân tích malware thường bao gồm các công cụ pháp y (forensic tools), debugger, disassembler và máy ảo.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_148",
          "slide": "slide_148.png",
          "slide_webp": "slides/IAM302/slide_148.webp",
          "inline_webp": null,
          "question": "Which tool is commonly used for memory forensics?",
          "options": {
            "A": "Wireshark",
            "B": "Volatility",
            "C": "Snort",
            "D": "IDA Pro"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Công cụ nào thường được sử dụng trong điều tra pháp y bộ nhớ (memory forensics)?",
          "vi_explanation": "B. Volatility\nVolatility là framework phổ biến dùng để phân tích memory dump và trích xuất tiến trình, DLL, Registry, kết nối mạng,...",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_149",
          "slide": "slide_149.png",
          "slide_webp": "slides/IAM302/slide_149.webp",
          "inline_webp": null,
          "question": "Which tool is commonly used for dynamic malware analysis?",
          "options": {
            "A": "IDA Pro",
            "B": "Wireshark",
            "C": "OllyDbg",
            "D": "VirusTotal"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Công cụ nào thường được sử dụng để phân tích malware động (dynamic malware analysis)?",
          "vi_explanation": "C. OllyDbg\nOllyDbg là debugger phổ biến giúp chạy từng bước chương trình và quan sát hành vi của malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_150",
          "slide": "slide_150.png",
          "slide_webp": "slides/IAM302/slide_150.webp",
          "inline_webp": null,
          "question": "Which technique can find many infecting a computer a single point of measurement?",
          "options": {
            "A": "Host-based signatures",
            "B": "Antivirus signatures",
            "C": "Static analysis",
            "D": "Dynamic analysis",
            "E": "Network signatures"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Kỹ thuật nào có thể phát hiện nhiều máy bị nhiễm chỉ từ một điểm giám sát?",
          "vi_explanation": "E. Network signatures\nNetwork signatures giám sát lưu lượng tại một điểm trên mạng nên có thể phát hiện nhiều máy bị nhiễm cùng lúc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_151",
          "slide": "slide_151.png",
          "slide_webp": "slides/IAM302/slide_151.webp",
          "inline_webp": null,
          "question": "Which technique is most common for normal executable files?",
          "options": {
            "A": "Static linking",
            "B": "Runtime linking",
            "C": "Dynamic linking",
            "D": "Packing"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào phổ biến nhất đối với các tệp thực thi thông thường?",
          "vi_explanation": "C. Dynamic linking\nHầu hết chương trình Windows sử dụng Dynamic Linking thông qua các tệp DLL để giảm kích thước và chia sẻ thư viện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_152",
          "slide": "slide_152.png",
          "slide_webp": "slides/IAM302/slide_152.webp",
          "inline_webp": null,
          "question": "Which technique finds the readable text in a file?",
          "options": {
            "A": "Antivirus",
            "B": "Hashes",
            "C": "Strings",
            "D": "Functions"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỹ thuật nào được dùng để tìm các chuỗi văn bản có thể đọc được trong một tệp?",
          "vi_explanation": "C. Strings\nCông cụ strings trích xuất các chuỗi ASCII hoặc Unicode từ tệp thực thi để hỗ trợ phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_153",
          "slide": "slide_153.png",
          "slide_webp": "slides/IAM302/slide_153.webp",
          "inline_webp": null,
          "question": "Which network type is the most hazardous?",
          "options": {
            "A": "Host-only",
            "B": "NAT",
            "C": "Bridged",
            "D": "Airgap"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Loại mạng nào nguy hiểm nhất?",
          "vi_explanation": "C. Bridged\nChế độ Bridged kết nối máy ảo trực tiếp với mạng thật, khiến malware có thể giao tiếp với các thiết bị khác nên nguy hiểm nhất khi phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_154",
          "slide": "slide_154.png",
          "slide_webp": "slides/IAM302/slide_154.webp",
          "inline_webp": null,
          "question": "Which Python operation reverses a list in-place, modifying the original list?",
          "options": {
            "A": "a.sort()",
            "B": "a.reverse()",
            "C": "a[:-1]",
            "D": "reversed(a)"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Thao tác Python nào đảo ngược một danh sách ngay trên chính danh sách đó (in-place)?",
          "vi_explanation": "B. a.reverse()\na.reverse() thay đổi trực tiếp danh sách gốc, trong khi a[::-1] và reversed(a) tạo kết quả mới hoặc iterator.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_155",
          "slide": "slide_155.png",
          "slide_webp": "slides/IAM302/slide_155.webp",
          "inline_webp": null,
          "question": "Which section contains the instructions for the CPU?",
          "options": {
            "A": "Data",
            "B": "Code",
            "C": "Heap",
            "D": "Stack"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Phần (section) nào chứa các lệnh để CPU thực thi?",
          "vi_explanation": "B. Code\nPhần Code (thường là .text trong tệp PE) chứa các chỉ thị máy để CPU thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_156",
          "slide": "slide_156.png",
          "slide_webp": "slides/IAM302/slide_156.webp",
          "inline_webp": null,
          "question": "Which scripting language is commonly used in Immunity Debugger for automating tasks during malware analysis?",
          "options": {
            "A": "Python",
            "B": "JavaScript",
            "C": "Ruby",
            "D": "Perl ES"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Ngôn ngữ lập trình kịch bản nào thường được sử dụng trong Immunity Debugger để tự động hóa các tác vụ phân tích malware?",
          "vi_explanation": "A. Python\nImmunity Debugger hỗ trợ Python để viết plugin và script tự động hóa quá trình phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_157",
          "slide": "slide_157.png",
          "slide_webp": "slides/IAM302/slide_157.webp",
          "inline_webp": null,
          "question": "Which x86 register typically holds the return value of a function?",
          "options": {
            "A": "ECX",
            "B": "EAX",
            "C": "EBP",
            "D": "ESP"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Thanh ghi x86 nào thường chứa giá trị trả về của một hàm?",
          "vi_explanation": "B. EAX\nTheo quy ước gọi hàm trên x86, giá trị trả về của hầu hết các hàm được lưu trong thanh ghi EAX.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_158",
          "slide": "slide_158.png",
          "slide_webp": "slides/IAM302/slide_158.webp",
          "inline_webp": null,
          "question": "Which register is used to hold values such as subtotals during calculations?",
          "options": {
            "A": "EAX, EBX, ECX, or EDX",
            "B": "EBP or ESP",
            "C": "EFLAGS",
            "D": "EIP"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Thanh ghi nào được dùng để lưu các giá trị tạm thời như kết quả trung gian trong quá trình tính toán?",
          "vi_explanation": "A. EAX, EBX, ECX, hoặc EDX\nCác thanh ghi đa dụng (general-purpose registers) EAX, EBX, ECX và EDX thường được dùng để lưu dữ liệu và kết quả trung gian.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_159",
          "slide": "slide_159.png",
          "slide_webp": "slides/IAM302/slide_159.webp",
          "inline_webp": null,
          "question": "Which network type is the most hazardous?",
          "options": {
            "A": "Host-only",
            "B": "NAT",
            "C": "Bridged",
            "D": "Airgap"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Loại mạng nào nguy hiểm nhất?",
          "vi_explanation": "C. Bridged\nChế độ Bridged kết nối máy ảo trực tiếp với mạng thật, khiến malware có thể giao tiếp với các thiết bị khác nên nguy hiểm nhất khi phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_160",
          "slide": "slide_160.png",
          "slide_webp": "slides/IAM302/slide_160.webp",
          "inline_webp": null,
          "question": "Which programming language is commonly used in malware analysis due to its versatility and ease of use?",
          "options": {
            "A": "Java",
            "B": "Python",
            "C": "C++",
            "D": "JavaScript"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Ngôn ngữ lập trình nào thường được sử dụng trong phân tích malware nhờ tính linh hoạt và dễ sử dụng?",
          "vi_explanation": "B. Python\nPython được sử dụng rộng rãi để tự động hóa, phân tích mẫu malware và phát triển các công cụ hỗ trợ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_161",
          "slide": "slide_161.png",
          "slide_webp": "slides/IAM302/slide_161.webp",
          "inline_webp": null,
          "question": "Which Python library provides easy-to-use interfaces for interacting with Windows APIs, facilitating malware analysis on Windows systems?",
          "options": {
            "A": "ctypes",
            "B": "Win32API",
            "C": "pywin32",
            "D": "WindowsAPI"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thư viện Python nào cung cấp giao diện dễ sử dụng để làm việc với Windows API, hỗ trợ phân tích malware trên Windows?",
          "vi_explanation": "C. pywin32\npywin32 cung cấp quyền truy cập vào các Windows API từ Python, rất hữu ích trong malware analysis.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_162",
          "slide": "slide_162.png",
          "slide_webp": "slides/IAM302/slide_162.webp",
          "inline_webp": null,
          "question": "How does ClamAV classify malware?",
          "options": {
            "A": "Based on its size",
            "B": "Based on its age",
            "C": "Based on its behavior",
            "D": "Based on its color"
          },
          "correct": [
            "C"
          ],
          "vi_question": "ClamAV phân loại malware dựa trên yếu tố nào?",
          "vi_explanation": "C. Based on its behavior\nTrong giáo trình, ClamAV sử dụng các chữ ký và quy tắc để nhận diện malware theo đặc điểm và hành vi của chúng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_163",
          "slide": "slide_163.png",
          "slide_webp": "slides/IAM302/slide_163.webp",
          "inline_webp": null,
          "question": "Which scripting language is commonly used in Immunity Debugger for automating tasks during malware analysis?",
          "options": {
            "A": "Python",
            "B": "JavaScript",
            "C": "Ruby",
            "D": "Perl"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Ngôn ngữ kịch bản nào thường được sử dụng trong Immunity Debugger để tự động hóa tác vụ?",
          "vi_explanation": "A. Python\nImmunity Debugger hỗ trợ Python để viết plugin và script tự động hóa quá trình phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_164",
          "slide": "slide_164.png",
          "slide_webp": "slides/IAM302/slide_164.webp",
          "inline_webp": null,
          "question": "Assembly language programs are written using",
          "options": {
            "A": "Hex code",
            "B": "Mnemonics",
            "C": "ASCII code",
            "D": "None of the other choices"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Chương trình Assembly được viết bằng gì?",
          "vi_explanation": "B. Mnemonics",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_165",
          "slide": "slide_165.png",
          "slide_webp": "slides/IAM302/slide_165.webp",
          "inline_webp": null,
          "question": "During malware analysis using Debug, what are the most common types of breakpoints?",
          "options": {
            "A": "Software execution breakpoint",
            "B": "Hardware execution breakpoint",
            "C": "Conditional breakpoint",
            "D": "None of the mentioned"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Trong quá trình phân tích malware bằng debugger, loại breakpoint nào được sử dụng phổ biến nhất?",
          "vi_explanation": "A. Software execution breakpoint\nSoftware execution breakpoint là loại breakpoint phổ biến nhất trong quá trình debug malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_166",
          "slide": "slide_166.png",
          "slide_webp": "slides/IAM302/slide_166.webp",
          "inline_webp": null,
          "question": "Data files containing detection and/or remediation code that antivirus or antispyware products use to identify malicious code are known as:",
          "options": {
            "A": "Repositories",
            "B": "Signature files",
            "C": "Macrosspace",
            "D": "Security logs"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Các tệp dữ liệu chứa mã phát hiện hoặc xử lý mà phần mềm antivirus/antispyware sử dụng để nhận diện malware được gọi là gì?",
          "vi_explanation": "B. Signature files\nSignature files chứa các mẫu nhận diện (signatures) dùng để phát hiện malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_167",
          "slide": "slide_167.png",
          "slide_webp": "slides/IAM302/slide_167.webp",
          "inline_webp": null,
          "question": "In coding conventions, Which of these indicates that \"Function\" has been revised?",
          "options": {
            "A": "Function",
            "B": "FunctionEx",
            "C": "FunctionA",
            "D": "FunctionW"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Theo quy ước đặt tên API của Windows, hậu tố nào cho biết hàm đã được mở rộng (revised)?",
          "vi_explanation": "B. FunctionEx\nHậu tố Ex (Extended) biểu thị phiên bản mở rộng hoặc cải tiến của một hàm Windows API.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_168",
          "slide": "slide_168.png",
          "slide_webp": "slides/IAM302/slide_168.webp",
          "inline_webp": null,
          "question": "In IDA Pro, you are in graph mode, as shown to the right. How can you get into text mode, as shown in the lower image?",
          "options": {
            "A": "F9",
            "B": "SPACEBAR",
            "C": "Enter",
            "D": "Ctrl+C",
            "E": "None of the above"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Trong IDA Pro ở chế độ Graph View, làm thế nào để chuyển sang Text View?",
          "vi_explanation": "B. SPACEBAR\nNhấn Spacebar để chuyển đổi qua lại giữa Graph View và Text View trong IDA Pro.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_169",
          "slide": "slide_169.png",
          "slide_webp": "slides/IAM302/slide_169.webp",
          "inline_webp": null,
          "question": "In what order are the bytes of IP addresses sent over networks?",
          "options": {
            "A": "Mnemonic",
            "B": "Operand",
            "C": "Register",
            "D": "Big-endian",
            "E": "Little-endian"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Các byte của địa chỉ IP được truyền trên mạng theo thứ tự nào?",
          "vi_explanation": "D. Big-endian\nGiao thức mạng sử dụng Network Byte Order, tức là Big-endian.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_170",
          "slide": "slide_170.png",
          "slide_webp": "slides/IAM302/slide_170.webp",
          "inline_webp": null,
          "question": "In coding conventions, Which of these indicates that \"Function\" has been revised?",
          "options": {
            "A": "Function",
            "B": "FunctionEx",
            "C": "FunctionA",
            "D": "FunctionW"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Theo quy ước đặt tên API của Windows, hậu tố nào cho biết hàm đã được mở rộng?",
          "vi_explanation": "B. FunctionEx\nHậu tố Ex biểu thị phiên bản mở rộng của hàm gốc.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_171",
          "slide": "slide_171.png",
          "slide_webp": "slides/IAM302/slide_171.webp",
          "inline_webp": null,
          "question": "In the Windows operating system, which item opens with higher privileges than administrator?",
          "options": {
            "A": "DLL",
            "B": "Process",
            "C": "Mutex",
            "D": "Services",
            "E": "Component Object Model (COM)"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Trong Windows, thành phần nào chạy với đặc quyền cao hơn Administrator?",
          "vi_explanation": "D. Services\nNhiều Windows Services chạy dưới tài khoản SYSTEM, có quyền cao hơn tài khoản Administrator.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_172",
          "slide": "slide_172.png",
          "slide_webp": "slides/IAM302/slide_172.webp",
          "inline_webp": null,
          "question": "In the following code, what is the data type of n?\n\nn = '123'",
          "options": {
            "A": "string",
            "B": "integer",
            "C": "boolean",
            "D": "number"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Trong đoạn mã sau, kiểu dữ liệu của n là gì?",
          "vi_explanation": "n = '123'\nA. string\nGiá trị '123' được đặt trong dấu nháy đơn nên là kiểu chuỗi (string).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_173",
          "slide": "slide_173.png",
          "slide_webp": "slides/IAM302/slide_173.webp",
          "inline_webp": null,
          "question": "In namespace, Which prefix allows longer filenames in Windows?",
          "options": {
            "A": "Handle",
            "B": "\\\\",
            "C": "\\2\\",
            "D": "\\\\.\\",
            "E": "ADS"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Trong namespace của Windows, tiền tố nào cho phép sử dụng đường dẫn rất dài?",
          "vi_explanation": "C. \\\\?\\\nTiền tố \\\\?\\ cho phép Windows xử lý đường dẫn vượt qua giới hạn 260 ký tự (MAX_PATH).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_174",
          "slide": "slide_174.png",
          "slide_webp": "slides/IAM302/slide_174.webp",
          "inline_webp": null,
          "question": "int b = 1;\nmain() {\n    int x = 2;\n    printf(\"%d %d\", x, b);\n}\n\nWhich location is a likely one for x?",
          "options": {
            "A": ".rdata:00416111",
            "B": "[ebp+var_8]",
            "C": "eax",
            "D": "eip"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Trong chương trình sau, vị trí nào có khả năng chứa biến x?",
          "vi_explanation": "int b = 1;\nmain() {\n    int x = 2;\n    printf(\"%d %d\", x, b);\n}\nB. [ebp+var_8]\nx là biến cục bộ nên thường được lưu trên stack, được truy cập thông qua địa chỉ tương đối với thanh ghi EBP",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_175",
          "slide": "slide_175.png",
          "slide_webp": "slides/IAM302/slide_175.webp",
          "inline_webp": null,
          "question": "Intb=1; main() { intx =2; printf(\"%d %d\", x, b); } Question: In this program, what ASM opcode places x where printf can find it?",
          "options": {
            "A": "jz",
            "B": "amp",
            "C": "push",
            "D": "pop",
            "E": "call"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Trong chương trình trên, opcode ASM nào đặt x vào nơi mà printf có thể sử dụng?",
          "vi_explanation": "C. push\nTheo quy ước gọi hàm x86, các tham số được truyền lên stack bằng lệnh PUSH trước khi gọi printf.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_176",
          "slide": "slide_176.png",
          "slide_webp": "slides/IAM302/slide_176.webp",
          "inline_webp": null,
          "question": "Ubuntu, for ordinary users, which of the following command can be used to install Wireshark?",
          "options": {
            "A": "# apt-get install wireshark",
            "B": "# apt-get uninstall wireshark",
            "C": "# sudo apt-get setup wireshark",
            "D": "# sudo apt-get install wireshark"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Trên Ubuntu, người dùng thông thường có thể dùng lệnh nào để cài đặt Wireshark?",
          "vi_explanation": "D. sudo apt-get install wireshark\nCần sử dụng quyền sudo để cài đặt gói Wireshark bằng apt-get.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_177",
          "slide": "slide_177.png",
          "slide_webp": "slides/IAM302/slide_177.webp",
          "inline_webp": null,
          "question": "Software in the main registry stores",
          "options": {
            "A": "the window and program configuration",
            "B": "user's and system security settings",
            "C": "the system security settings",
            "D": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Nhánh Software trong Registry chính của Windows lưu trữ gì?",
          "vi_explanation": "A. Cấu hình của Windows và các chương trình.\nKhóa HKLM\\Software và các khóa liên quan chứa cấu hình của hệ điều hành và phần mềm đã cài đặt.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_178",
          "slide": "slide_178.png",
          "slide_webp": "slides/IAM302/slide_178.webp",
          "inline_webp": null,
          "question": "sudo freshclam does",
          "options": {
            "A": "Update ClamAV signatures",
            "B": "Install ClamAV signatures",
            "C": "Remove ClamAV signatures",
            "D": "None of the mentioned"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Lệnh sudo freshclam dùng để làm gì?",
          "vi_explanation": "A. Cập nhật cơ sở dữ liệu chữ ký của ClamAV.\nfreshclam tải và cập nhật các signature mới nhất để ClamAV phát hiện malware hiệu quả hơn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_179",
          "slide": "slide_179.png",
          "slide_webp": "slides/IAM302/slide_179.webp",
          "inline_webp": null,
          "question": "You're analyzing a shellcode that uses a CALL instruction jumping outside the memory buffer. What does this likely indicate?",
          "options": {
            "A": "Highly obfuscated shellcode",
            "B": "False positive in detection",
            "C": "A kernel-mode exploit",
            "D": "Inline hooking technique"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_180",
          "slide": "slide_180.png",
          "slide_webp": "slides/IAM302/slide_180.webp",
          "inline_webp": null,
          "question": "You suspect ransomware has encrypted important user files. Based on the classification, what is the likely purpose of this malware?",
          "options": {
            "A": "Spreading spam",
            "B": "Gaining administrative access",
            "C": "Demanding payment for decryption",
            "D": "Downloading another payload"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Bạn nghi ngờ ransomware đã mã hóa các tệp quan trọng của người dùng. Mục đích nhiều khả năng của malware này là gì?",
          "vi_explanation": "C. Demanding payment for decryption\nRansomware mã hóa dữ liệu và yêu cầu nạn nhân trả tiền chuộc để nhận khóa giải mã.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_181",
          "slide": "slide_181.png",
          "slide_webp": "slides/IAM302/slide_181.webp",
          "inline_webp": null,
          "question": "You want to upload a file to multiple antivirus engines using Python from the command line. Which tool would be most appropriate?",
          "options": {
            "A": "Cuckoo Sandbox",
            "B": "Multi-AV Uploader",
            "C": "Scapy",
            "D": "PyDebugger"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Bạn muốn tải một tệp lên nhiều công cụ antivirus bằng Python từ dòng lệnh. Công cụ nào phù hợp nhất?",
          "vi_explanation": "B. Multi-AV Uploader\nMulti-AV Uploader tự động gửi tệp đến nhiều dịch vụ quét antivirus như VirusTotal để phục vụ phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_182",
          "slide": "slide_182.png",
          "slide_webp": "slides/IAM302/slide_182.webp",
          "inline_webp": null,
          "question": "Which malware type tricks users into purchasing fake software or services through fear tactics?",
          "options": {
            "A": "Ransomware",
            "B": "Downloader",
            "C": "Bot",
            "D": "Scareware"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Loại mã độc nào lừa người dùng mua phần mềm hoặc dịch vụ giả mạo bằng cách tạo ra sự sợ hãi?",
          "vi_explanation": "D. Scareware\nScareware hiển thị các cảnh báo giả như \"Máy tính của bạn bị nhiễm virus\" để dụ người dùng mua phần mềm bảo mật giả hoặc trả tiền cho các dịch vụ không có thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_183",
          "slide": "slide_183.png",
          "slide_webp": "slides/IAM302/slide_183.webp",
          "inline_webp": null,
          "question": "What does memory forensics analyze?",
          "options": {
            "A": "Hard disk partitions",
            "B": "Graphics rendering",
            "C": "CPU temperature logs",
            "D": "Physical RAM content"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Memory Forensics phân tích nội dung nào?",
          "vi_explanation": "D. Nội dung của bộ nhớ RAM vật lý (Physical RAM content).\nMemory Forensics tập trung phân tích dữ liệu trong RAM, bao gồm các tiến trình đang chạy, kết nối mạng, khóa mã hóa và mã độc đang hoạt động.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_184",
          "slide": "slide_184.png",
          "slide_webp": "slides/IAM302/slide_184.webp",
          "inline_webp": null,
          "question": "During an incident, you suspect malware is running. What memory acquisition tool could you use on a 64-bit Windows system?",
          "options": {
            "A": "Win32dd",
            "B": "Win64dd",
            "C": "Task Manager",
            "D": "Registry Editor"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Trong quá trình điều tra, bạn nghi ngờ mã độc đang chạy. Công cụ thu thập bộ nhớ nào có thể sử dụng trên hệ điều hành Windows 64-bit?",
          "vi_explanation": "B. Win64dd\nWin64dd là công cụ chuyên dùng để thu thập ảnh bộ nhớ (memory image) trên hệ điều hành Windows 64-bit phục vụ điều tra số.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_185",
          "slide": "slide_185.png",
          "slide_webp": "slides/IAM302/slide_185.webp",
          "inline_webp": null,
          "question": "A malware sample is injecting threads into another process. Where can this be detected in memory forensics?",
          "options": {
            "A": "File system",
            "B": "Registry dump",
            "C": "Process and thread structures",
            "D": "ARP cache"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một mẫu mã độc đang chèn các luồng (threads) vào một tiến trình khác. Điều này có thể được phát hiện ở đâu trong Memory Forensics?",
          "vi_explanation": "C. Cấu trúc tiến trình và luồng (Process and thread structures).\nKỹ thuật thread injection có thể được phát hiện bằng cách phân tích các cấu trúc process và thread trong bộ nhớ RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_186",
          "slide": "slide_186.png",
          "slide_webp": "slides/IAM302/slide_186.webp",
          "inline_webp": null,
          "question": "You notice your browser opens multiple ads without clicking anything, and performance slows significantly. Which type of malware is most likely involved?",
          "options": {
            "A": "Worm",
            "B": "Rootkit",
            "C": "Adware",
            "D": "Spyware"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Bạn nhận thấy trình duyệt tự động mở nhiều quảng cáo dù không nhấp chuột và hiệu suất máy tính giảm đáng kể. Loại mã độc nào có khả năng cao nhất?",
          "vi_explanation": "C. Adware\nAdware tự động hiển thị quảng cáo không mong muốn, gây chậm hệ thống và ảnh hưởng đến trải nghiệm người dùng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_187",
          "slide": "slide_187.png",
          "slide_webp": "slides/IAM302/slide_187.webp",
          "inline_webp": null,
          "question": "Which type of Malware Analysis method involves examining network traffic to understand malware behavior?",
          "options": {
            "A": "Static analysis",
            "B": "Dynamic analysis",
            "C": "Hybrid analysis",
            "D": "Logical signature detection"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Phương pháp phân tích mã độc nào bao gồm việc kiểm tra lưu lượng mạng để hiểu hành vi của mã độc?",
          "vi_explanation": "B. Dynamic analysis\nDynamic Analysis chạy mã độc trong môi trường kiểm soát và quan sát hành vi của nó, bao gồm các kết nối mạng, tiến trình và thay đổi hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_188",
          "slide": "slide_188.png",
          "slide_webp": "slides/IAM302/slide_188.webp",
          "inline_webp": null,
          "question": "You're investigating a malware sample with suspicious outbound connections. Which sandbox output format would be most helpful?",
          "options": {
            "A": "File metadata summary",
            "B": "PCAP file",
            "C": "Process dump",
            "D": "Screenshot log"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Bạn đang điều tra một mẫu mã độc có các kết nối ra ngoài đáng ngờ. Định dạng đầu ra nào của sandbox sẽ hữu ích nhất?",
          "vi_explanation": "B. PCAP file\nTệp PCAP lưu toàn bộ lưu lượng mạng, giúp phân tích các kết nối của mã độc tới máy chủ điều khiển (C&C) hoặc các địa chỉ IP đáng ngờ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_189",
          "slide": "slide_189.png",
          "slide_webp": "slides/IAM302/slide_189.webp",
          "inline_webp": null,
          "question": "Which debugger feature allows analysts to view and modify the contents of registers and memory?",
          "options": {
            "A": "Breakpoints",
            "B": "Stepping through code",
            "C": "Memory dump",
            "D": "Watchpoints"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Tính năng nào của trình gỡ lỗi (debugger) cho phép nhà phân tích xem và chỉnh sửa nội dung của thanh ghi (registers) và bộ nhớ?",
          "vi_explanation": "C. Memory dump\nMemory dump cho phép xem nội dung bộ nhớ và nhiều trình gỡ lỗi còn cho phép chỉnh sửa giá trị trong bộ nhớ và thanh ghi để phục vụ phân tích.\n[Lưu ý: Slide gốc dòng trên ghi D, giải thích bên dưới chọn C. Memory dump]",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_190",
          "slide": "slide_190.png",
          "slide_webp": "slides/IAM302/slide_190.webp",
          "inline_webp": null,
          "question": "Which tool is specifically recommended for identifying programs configured to run automatically on a Windows system?",
          "options": {
            "A": "Process Monitor",
            "B": "Autoruns",
            "C": "Regshot",
            "D": "tcpdump",
            "E": "All of the above"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Công cụ nào được khuyến nghị để xác định các chương trình được cấu hình tự khởi động trên hệ điều hành Windows?",
          "vi_explanation": "B. Autoruns\nAutoruns của Microsoft Sysinternals hiển thị tất cả các vị trí tự khởi động (startup locations), giúp phát hiện chương trình hoặc mã độc được cấu hình chạy cùng Windows.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_191",
          "slide": "slide_191.png",
          "slide_webp": "slides/IAM302/slide_191.webp",
          "inline_webp": null,
          "question": "You find API calls to ‘CreateRemoteThread’ and ‘VirtualAllocEx’ in a malware sample. What behavior might this indicate?",
          "options": {
            "A": "Basic file access",
            "B": "DNS hijacking",
            "C": "Process injection",
            "D": "Port scanning"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Bạn tìm thấy các lệnh gọi API CreateRemoteThread và VirtualAllocEx trong một mẫu malware. Điều này có thể cho thấy hành vi nào?",
          "vi_explanation": "C. Process injection\n→ Tiêm mã vào tiến trình (Process Injection).\nVirtualAllocEx có thể cấp phát bộ nhớ trong không gian địa chỉ của một tiến trình khác, còn CreateRemoteThread có thể tạo một thread chạy trong tiến trình đó. Sự kết hợp này thường là dấu hiệu của kỹ thuật process injection.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_192",
          "slide": "slide_192.png",
          "slide_webp": "slides/IAM302/slide_192.webp",
          "inline_webp": null,
          "question": "What is a typical host process for shared service DLLs?",
          "options": {
            "A": "svchost.exe",
            "B": "services.exe",
            "C": "rundll32.exe",
            "D": "taskhostw.exe"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Tiến trình host điển hình cho các shared service DLLs là gì?",
          "vi_explanation": "A. svchost.exe\n→ Tiến trình svchost.exe.\nsvchost.exe (Service Host) được Windows sử dụng để làm tiến trình host cho nhiều dịch vụ hệ thống được triển khai dưới dạng DLL.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_193",
          "slide": "slide_193.png",
          "slide_webp": "slides/IAM302/slide_193.webp",
          "inline_webp": null,
          "question": "Which command retrieves data from the stack?",
          "options": {
            "A": "push",
            "B": "cmp",
            "C": "iz",
            "D": "add",
            "E": "pop"
          },
          "correct": [
            "E"
          ],
          "vi_question": "Lệnh nào lấy dữ liệu ra khỏi stack?",
          "vi_explanation": "E. pop\n→ Lệnh pop.\npop lấy giá trị ở đỉnh stack và đưa nó vào thanh ghi hoặc vị trí đích, đồng thời cập nhật stack pointer. Ngược lại, push đưa dữ liệu vào stack.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_194",
          "slide": "slide_194.png",
          "slide_webp": "slides/IAM302/slide_194.webp",
          "inline_webp": null,
          "question": "If a malware specimen uses hardcoded IPs for C2 communication, which of the following is most appropriate to simulate an interaction?",
          "options": {
            "A": "MiniFake DNS",
            "B": "Wireshark",
            "C": "Honeyd",
            "D": "Netcat"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Nếu một mẫu malware sử dụng địa chỉ IP được hardcode để giao tiếp C2, công cụ nào sau đây phù hợp nhất để mô phỏng tương tác?",
          "vi_explanation": "D. Netcat\n→ Netcat.\nVì malware kết nối trực tiếp tới địa chỉ IP nên không cần giả lập phân giải DNS. Netcat có thể tạo listener/kết nối mạng đơn giản để mô phỏng endpoint và quan sát dữ liệu mà mẫu gửi tới.",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_medium",
      "title": "Câu trung bình (Quản trị & Rủi ro)",
      "tag": "Câu trung bình",
      "slide_range": "Slide 196 - 302",
      "questions": [
        {
          "id": "IAM302_slide_196",
          "slide": "slide_196.png",
          "slide_webp": "slides/IAM302/slide_196.webp",
          "inline_webp": null,
          "question": "What is a key aspect of the final stage of memory forensics?",
          "options": {
            "A": "Removing all malware traces from the system",
            "B": "Generating a detailed report of findings",
            "C": "Restoring the system to a previous state",
            "D": "Encrypting sensitive data found in the memory dump"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Một khía cạnh quan trọng của giai đoạn cuối trong điều tra pháp y bộ nhớ (memory forensics) là gì?",
          "vi_explanation": "B. Tạo báo cáo chi tiết về các phát hiện.\nGiai đoạn cuối của memory forensics là tổng hợp kết quả và lập báo cáo phục vụ điều tra hoặc xử lý sự cố.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_197",
          "slide": "slide_197.png",
          "slide_webp": "slides/IAM302/slide_197.webp",
          "inline_webp": null,
          "question": "What is the primary function of a rootkit in a compromised system?",
          "options": {
            "A": "To create a backdoor for future access",
            "B": "To infect other computers via network propagation",
            "C": "To hide the presence of other malicious software",
            "D": "To extract sensitive financial information"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Chức năng chính của rootkit trong một hệ thống bị xâm nhập là gì?",
          "vi_explanation": "C. Che giấu sự hiện diện của các phần mềm độc hại khác.\nRootkit giúp malware ẩn tiến trình, tệp, Registry hoặc kết nối mạng để tránh bị phát hiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_198",
          "slide": "slide_198.png",
          "slide_webp": "slides/IAM302/slide_198.webp",
          "inline_webp": null,
          "question": "What is the primary goal of incident response?",
          "options": {
            "A": "To prevent all cybersecurity incidents",
            "B": "To identify, contain, and eradicate cybersecurity incidents",
            "C": "To ignore cybersecurity incidents until they become critical",
            "D": "To blame individuals responsible for cybersecurity incidents"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục tiêu chính của quá trình ứng phó sự cố (Incident Response) là gì?",
          "vi_explanation": "B. Xác định, cô lập và loại bỏ các sự cố an ninh mạng.\nIncident Response nhằm phát hiện, ngăn chặn, loại bỏ mối đe dọa và khôi phục hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_199",
          "slide": "slide_199.png",
          "slide_webp": "slides/IAM302/slide_199.webp",
          "inline_webp": null,
          "question": "What is the purpose of the sandbox?",
          "options": {
            "A": "To stop all BYOD network traffic",
            "B": "To flag and pass the known exploit to the endpoint to handle",
            "C": "To observe the activity of unknown code in a quarantined environment",
            "D": "To run vulnerability scans on all network endpoints"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục đích của sandbox là gì?",
          "vi_explanation": "C. Quan sát hoạt động của mã chưa xác định trong môi trường cách ly.\nSandbox thực thi mã nghi ngờ trong môi trường cô lập để phân tích hành vi mà không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_200",
          "slide": "slide_200.png",
          "slide_webp": "slides/IAM302/slide_200.webp",
          "inline_webp": null,
          "question": "What is a key aspect of the final stage of memory forensics?",
          "options": {
            "A": "Removing all malware traces from the system",
            "B": "Generating a detailed report of findings",
            "C": "Restoring the system to a previous state",
            "D": "Encrypting sensitive data found in the memory dump"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Một khía cạnh quan trọng của giai đoạn cuối trong memory forensics là gì?",
          "vi_explanation": "B. Tạo báo cáo chi tiết về các phát hiện.\nBáo cáo pháp y là sản phẩm cuối cùng, ghi lại quy trình và kết quả điều tra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_201",
          "slide": "slide_201.png",
          "slide_webp": "slides/IAM302/slide_201.webp",
          "inline_webp": null,
          "question": "What is Volatility in the context of memory forensics?",
          "options": {
            "A": "A measure of system instability caused by malware",
            "B": "A forensic analysis tool used to investigate network traffic",
            "C": "A framework for analyzing memory dumps of compromised systems",
            "D": "A method for encrypting sensitive data stored in RAM"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Volatility là gì trong lĩnh vực điều tra pháp y bộ nhớ?",
          "vi_explanation": "C. Một framework dùng để phân tích memory dump của các hệ thống bị xâm nhập.\nVolatility là công cụ phổ biến để phân tích RAM dump, trích xuất tiến trình, DLL, Registry và các bằng chứng khác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_202",
          "slide": "slide_202.png",
          "slide_webp": "slides/IAM302/slide_202.webp",
          "inline_webp": null,
          "question": "What is the purpose of using anti-debugging techniques in malware?",
          "options": {
            "A": "To make malware harder to reverse engineer",
            "B": "To improve malware's performance",
            "C": "To prevent malware from spreading",
            "D": "To increase malware's visibility on infected systems"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Mục đích của các kỹ thuật chống gỡ lỗi (anti-debugging) trong malware là gì?",
          "vi_explanation": "A. Làm cho malware khó bị đảo ngược (reverse engineering).\nMalware sử dụng anti-debugging để phát hiện debugger hoặc gây khó khăn cho việc phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_203",
          "slide": "slide_203.png",
          "slide_webp": "slides/IAM302/slide_203.webp",
          "inline_webp": null,
          "question": "What is the primary purpose of using PEID in malware analysis?",
          "options": {
            "A": "Analyzing network traffic",
            "B": "Identifying packers and compilers used in executable files",
            "C": "Decrypting encrypted files",
            "D": "Debugging malware code"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích chính của việc sử dụng PEID trong phân tích malware là gì?",
          "vi_explanation": "B. Nhận diện packer và compiler được sử dụng trong tệp thực thi.\nPEID giúp xác định chương trình có bị pack hay không và được biên dịch bằng compiler nào.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_204",
          "slide": "slide_204.png",
          "slide_webp": "slides/IAM302/slide_204.webp",
          "inline_webp": null,
          "question": "What is a Trojan horse?",
          "options": {
            "A": "Malware that replicates itself and spreads to other computers",
            "B": "Malware that encrypts files and demands ransom for decryption",
            "C": "Malware that disguises itself as legitimate software to trick users",
            "D": "Malware that spreads through email attachments"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Trojan horse là gì?",
          "vi_explanation": "C. Malware ngụy trang thành phần mềm hợp pháp để đánh lừa người dùng.\nTrojan giả dạng chương trình hợp pháp nhằm lừa người dùng cài đặt và thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_205",
          "slide": "slide_205.png",
          "slide_webp": "slides/IAM302/slide_205.webp",
          "inline_webp": null,
          "question": "What is the purpose of the sandbox?",
          "options": {
            "A": "To stop all BYOD network traffic",
            "B": "To flag and pass the known exploit to the endpoint to handle",
            "C": "To observe the activity of unknown code in a quarantined environment",
            "D": "To run vulnerability scans on all network endpoints"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục đích của sandbox là gì?",
          "vi_explanation": "C. Quan sát hoạt động của mã chưa xác định trong môi trường cách ly.\nSandbox được dùng để phân tích malware an toàn mà không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_206",
          "slide": "slide_206.png",
          "slide_webp": "slides/IAM302/slide_206.webp",
          "inline_webp": null,
          "question": "What is the purpose of dynamic malware analysis?",
          "options": {
            "A": "Identifying malware origins",
            "B": "Analyzing malware behavior in real-time",
            "C": "Decompiling malware code",
            "D": "Encrypting malware payloads"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích của phân tích malware động (dynamic malware analysis) là gì?",
          "vi_explanation": "B. Phân tích hành vi của malware trong thời gian thực.\nMalware được thực thi trong môi trường an toàn để quan sát hành vi của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_207",
          "slide": "slide_207.png",
          "slide_webp": "slides/IAM302/slide_207.webp",
          "inline_webp": null,
          "question": "What is the purpose of using anti-debugging techniques in malware?",
          "options": {
            "A": "To make malware harder to reverse engineer",
            "B": "To improve malware's performance",
            "C": "To prevent malware from spreading",
            "D": "To increase malware's visibility on infected systems"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Mục đích của các kỹ thuật chống gỡ lỗi (anti-debugging) trong malware là gì?",
          "vi_explanation": "A. Làm cho malware khó bị đảo ngược (reverse engineering).\nAnti-debugging là kỹ thuật phổ biến để chống phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_208",
          "slide": "slide_208.png",
          "slide_webp": "slides/IAM302/slide_208.webp",
          "inline_webp": null,
          "question": "What is the primary goal of malware?",
          "options": {
            "A": "To improve system security",
            "B": "To subvert a computer's operation for a third party's benefit",
            "C": "To enhance system performance",
            "D": "To develop new software"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục tiêu chính của malware là gì?",
          "vi_explanation": "B. Phá hoại hoặc lợi dụng hoạt động của máy tính vì lợi ích của bên thứ ba.\nMalware được tạo ra để đánh cắp dữ liệu, kiểm soát hệ thống hoặc phục vụ mục đích của kẻ tấn công.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_209",
          "slide": "slide_209.png",
          "slide_webp": "slides/IAM302/slide_209.webp",
          "inline_webp": null,
          "question": "What advantage does Regshot offer in comparison to manual registry monitoring?",
          "options": {
            "A": "It provides real-time monitoring",
            "B": "It automatically creates reports",
            "C": "It captures changes in a snapshot format for easy comparison",
            "D": "It can be used to monitor file system activity"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Regshot có ưu điểm gì so với việc theo dõi Registry thủ công?",
          "vi_explanation": "C. Chụp snapshot để dễ dàng so sánh các thay đổi.\nRegshot tạo ảnh chụp Registry trước và sau khi chạy malware để xác định các thay đổi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_210",
          "slide": "slide_210.png",
          "slide_webp": "slides/IAM302/slide_210.webp",
          "inline_webp": null,
          "question": "What is Volatility in the context of memory forensics?",
          "options": {
            "A": "A measure of system instability caused by malware",
            "B": "A forensic analysis tool used to investigate network traffic",
            "C": "A framework for analyzing memory dumps of compromised systems",
            "D": "A method for encrypting sensitive data stored in RAM"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Volatility là gì trong lĩnh vực memory forensics?",
          "vi_explanation": "C. Một framework dùng để phân tích memory dump của các hệ thống bị xâm nhập.\nVolatility hỗ trợ nhiều plugin để phân tích tiến trình, DLL, network và Registry trong RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_211",
          "slide": "slide_211.png",
          "slide_webp": "slides/IAM302/slide_211.webp",
          "inline_webp": null,
          "question": "What is the significance of OllyDbg's \"Search for > All referenced text strings\" feature in malware analysis?",
          "options": {
            "A": "It searches for text strings in network traffic",
            "B": "It identifies references to strings within the malware code",
            "C": "It decrypts encrypted files found in memory dumps",
            "D": "It generates antivirus signatures to detect malware"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tính năng \"Search for > All referenced text strings\" của OllyDbg có ý nghĩa gì trong phân tích malware?",
          "vi_explanation": "B. Xác định các tham chiếu đến các chuỗi văn bản trong mã malware.\nTính năng này giúp nhanh chóng tìm các chuỗi như URL, tên file, Registry key hoặc thông báo lỗi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_212",
          "slide": "slide_212.png",
          "slide_webp": "slides/IAM302/slide_212.webp",
          "inline_webp": null,
          "question": "What is the purpose of setting breakpoints in a debugger during malware analysis?",
          "options": {
            "A": "To halt the execution of the malware at specific points",
            "B": "To speed up malware execution",
            "C": "To encrypt malware payloads",
            "D": "To hide malware from detection"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Mục đích của việc đặt breakpoint trong debugger khi phân tích malware là gì?",
          "vi_explanation": "A. Tạm dừng việc thực thi malware tại các vị trí xác định.\nBreakpoint cho phép nhà phân tích kiểm tra thanh ghi, bộ nhớ và trạng thái chương trình tại thời điểm mong muốn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_213",
          "slide": "slide_213.png",
          "slide_webp": "slides/IAM302/slide_213.webp",
          "inline_webp": null,
          "question": "What is the first step in the process of memory forensics?",
          "options": {
            "A": "Extracting files from the disk",
            "B": "Creating a memory dump of the target system",
            "C": "Analyzing network traffic",
            "D": "Scanning for malware signatures"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Bước đầu tiên của quy trình memory forensics là gì?",
          "vi_explanation": "B. Tạo bản sao bộ nhớ (memory dump) của hệ thống cần điều tra.\nTrước khi phân tích, cần thu thập ảnh bộ nhớ RAM để bảo toàn bằng chứng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_214",
          "slide": "slide_214.png",
          "slide_webp": "slides/IAM302/slide_214.webp",
          "inline_webp": null,
          "question": "What is the primary advantage of using a debugger in malware analysis?",
          "options": {
            "A": "It guarantees complete removal of malware from infected systems",
            "B": "It allows for real-time monitoring of malware behavior",
            "C": "It enables detailed analysis of malware execution flow",
            "D": "It automatically generates antivirus signatures"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Ưu điểm chính của việc sử dụng debugger trong phân tích malware là gì?",
          "vi_explanation": "C. Cho phép phân tích chi tiết luồng thực thi của malware.\nDebugger giúp theo dõi từng lệnh, thanh ghi và bộ nhớ khi malware chạy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_215",
          "slide": "slide_215.png",
          "slide_webp": "slides/IAM302/slide_215.webp",
          "inline_webp": null,
          "question": "What is the primary goal of memory forensics?",
          "options": {
            "A": "Recovering deleted files from storage devices",
            "B": "Analyzing network traffic for security threats",
            "C": "Extracting information from volatile memory of a system",
            "D": "Decrypting encrypted files on disk"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục tiêu chính của memory forensics là gì?",
          "vi_explanation": "C. Trích xuất thông tin từ bộ nhớ tạm thời (RAM) của hệ thống.\nMemory forensics tập trung vào dữ liệu đang tồn tại trong RAM như tiến trình, kết nối mạng và khóa mã hóa.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_216",
          "slide": "slide_216.png",
          "slide_webp": "slides/IAM302/slide_216.webp",
          "inline_webp": null,
          "question": "What is a backdoor in the context of malware?",
          "options": {
            "A": "A tool for encrypting network traffic",
            "B": "A method of hardware optimization",
            "C": "Malware that hides in browser extensions",
            "D": "Allows attackers to control the system"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Backdoor trong bối cảnh malware là gì?",
          "vi_explanation": "D. Cho phép kẻ tấn công điều khiển hệ thống.\nBackdoor tạo một cửa hậu giúp kẻ tấn công truy cập và điều khiển máy tính từ xa.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_217",
          "slide": "slide_217.png",
          "slide_webp": "slides/IAM302/slide_217.webp",
          "inline_webp": null,
          "question": "What is one way to bypass advanced malware techniques?",
          "options": {
            "A": "Using outdated antivirus software",
            "B": "Ignoring malware behavior",
            "C": "Avoiding static and dynamic analysis",
            "D": "Overcoming packing, obfuscation, and anti-analysis methods"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Một cách để vượt qua các kỹ thuật nâng cao của malware là gì?",
          "vi_explanation": "D. Vượt qua các kỹ thuật packing, obfuscation và anti-analysis.\nMalware hiện đại thường sử dụng các kỹ thuật này để chống phân tích, nên cần loại bỏ hoặc vượt qua chúng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_218",
          "slide": "slide_218.png",
          "slide_webp": "slides/IAM302/slide_218.webp",
          "inline_webp": null,
          "question": "What is one reason malware analysis should be part of a forensic investigation?",
          "options": {
            "A": "To reduce system performance during infection",
            "B": "To assist with both incident response and forensic analysis",
            "C": "To create new types of malware",
            "D": "To track legitimate user behavior"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tại sao phân tích malware nên là một phần của điều tra pháp y số?",
          "vi_explanation": "B. Hỗ trợ cả quá trình ứng phó sự cố và điều tra pháp y.\nPhân tích malware giúp xác định nguyên nhân, phạm vi ảnh hưởng và hỗ trợ khắc phục sự cố.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_219",
          "slide": "slide_219.png",
          "slide_webp": "slides/IAM302/slide_219.webp",
          "inline_webp": null,
          "question": "What is a common use of breakpoints in malware analysis?",
          "options": {
            "A": "To speed up malware execution",
            "B": "To halt program execution at specific points for analysis",
            "C": "To encrypt malware payloads",
            "D": "To hide malware from detection"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Một ứng dụng phổ biến của breakpoint trong phân tích malware là gì?",
          "vi_explanation": "B. Tạm dừng chương trình tại các vị trí xác định để phân tích.\nBreakpoint cho phép kiểm tra trạng thái của chương trình tại từng bước thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_220",
          "slide": "slide_220.png",
          "slide_webp": "slides/IAM302/slide_220.webp",
          "inline_webp": null,
          "question": "What is the key expectation of the course in malware analysis?",
          "options": {
            "A": "Memorizing malware names",
            "B": "Learning coding syntax",
            "C": "Practical skills in detecting, analyzing, and eradicating malware",
            "D": "Installing antivirus software only"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Kỳ vọng chính của khóa học về phân tích malware là gì?",
          "vi_explanation": "C. Trang bị kỹ năng thực hành phát hiện, phân tích và loại bỏ malware.\nKhóa học hướng đến khả năng thực hành thay vì chỉ học lý thuyết.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_221",
          "slide": "slide_221.png",
          "slide_webp": "slides/IAM302/slide_221.webp",
          "inline_webp": null,
          "question": "What is the primary purpose of using PEID in malware analysis?",
          "options": {
            "A": "Analyzing network traffic",
            "B": "Identifying packers and compilers used in executable files",
            "C": "Decrypting encrypted files",
            "D": "Debugging malware code"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích chính của PEID trong phân tích malware là gì?",
          "vi_explanation": "B. Nhận diện packer và compiler được sử dụng trong tệp thực thi.\nPEID giúp xác định file có bị pack hay không và được tạo bởi compiler nào.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_222",
          "slide": "slide_222.png",
          "slide_webp": "slides/IAM302/slide_222.webp",
          "inline_webp": null,
          "question": "What is a crucial first step in developing a good understanding of malware analysis?",
          "options": {
            "A": "Learning programming languages",
            "B": "Installing multiple antivirus programs",
            "C": "Obtaining hands-on experience with malware samples",
            "D": "Reading academic journals on cybersecurity"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Bước đầu tiên quan trọng để hiểu tốt về phân tích malware là gì?",
          "vi_explanation": "C. Có kinh nghiệm thực hành với các mẫu malware.\nThực hành với malware trong môi trường an toàn giúp hiểu rõ hành vi và kỹ thuật phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_223",
          "slide": "slide_223.png",
          "slide_webp": "slides/IAM302/slide_223.webp",
          "inline_webp": null,
          "question": "What is a crucial first step in developing a good understanding of malware analysis?",
          "options": {
            "A": "Learning programming languages",
            "B": "Installing multiple antivirus programs",
            "C": "Obtaining hands-on experience with malware samples",
            "D": "Reading academic journals on cybersecurity"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Bước đầu tiên quan trọng để hiểu tốt về phân tích malware là gì?",
          "vi_explanation": "C. Có kinh nghiệm thực hành với các mẫu malware.\nKinh nghiệm thực tế là yếu tố quan trọng nhất để nâng cao kỹ năng phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_224",
          "slide": "slide_224.png",
          "slide_webp": "slides/IAM302/slide_224.webp",
          "inline_webp": null,
          "question": "What is one limitation of using ClamAV for malware detection?",
          "options": {
            "A": "It requires high system resources",
            "B": "It cannot detect zero-day threats",
            "C": "It is not compatible with Windows operating systems",
            "D": "It is only effective against adware"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Một hạn chế của ClamAV trong việc phát hiện malware là gì?",
          "vi_explanation": "B. Không thể phát hiện hiệu quả các mối đe dọa zero-day.\nClamAV chủ yếu dựa trên chữ ký (signature-based detection), nên khó phát hiện các malware mới chưa có signature.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_225",
          "slide": "slide_225.png",
          "slide_webp": "slides/IAM302/slide_225.webp",
          "inline_webp": null,
          "question": "What is the significance of identifying the packer used in a malware executable?",
          "options": {
            "A": "It does not help in decrypting the malware code",
            "B": "It provides information about the malware author",
            "C": "It assists in identifying the malware's behavior and origin",
            "D": "It determines the file's size"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Ý nghĩa của việc xác định packer được sử dụng trong một tệp thực thi chứa malware là gì?",
          "vi_explanation": "C. Hỗ trợ xác định hành vi và nguồn gốc của malware.\nXác định packer giúp nhà phân tích nhận biết cách malware được đóng gói, hỗ trợ unpack và phân tích hành vi cũng như họ malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_226",
          "slide": "slide_226.png",
          "slide_webp": "slides/IAM302/slide_226.webp",
          "inline_webp": null,
          "question": "What is a key characteristic of malware?",
          "options": {
            "A": "It always requires user permission to execute",
            "B": "It never interacts with the operating system",
            "C": "It spreads and infects other systems",
            "D": "It cannot be detected by forensic tools"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đặc điểm quan trọng của malware là gì?",
          "vi_explanation": "C. Có khả năng lây lan và lây nhiễm sang các hệ thống khác.\nNhiều loại malware có khả năng tự lây lan hoặc phát tán để gây ảnh hưởng đến nhiều hệ thống.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_227",
          "slide": "slide_227.png",
          "slide_webp": "slides/IAM302/slide_227.webp",
          "inline_webp": null,
          "question": "What is the primary purpose of sandbox analysis in malware analysis?",
          "options": {
            "A": "To permanently remove malware from the system",
            "B": "To create a safe environment for testing software",
            "C": "To monitor network traffic for suspicious activity",
            "D": "To encrypt sensitive data to prevent unauthorized access"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích chính của phân tích bằng sandbox trong phân tích malware là gì?",
          "vi_explanation": "B. Tạo một môi trường an toàn để kiểm tra phần mềm.\nSandbox cho phép chạy malware trong môi trường cách ly để quan sát hành vi mà không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_228",
          "slide": "slide_228.png",
          "slide_webp": "slides/IAM302/slide_228.webp",
          "inline_webp": null,
          "question": "What is the purpose of setting breakpoints in a debugger during malware analysis?",
          "options": {
            "A": "To halt the execution of the malware at specific points",
            "B": "To speed up malware execution",
            "C": "To encrypt malware payloads",
            "D": "To hide malware from detection"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Mục đích của việc đặt breakpoint trong debugger khi phân tích malware là gì?",
          "vi_explanation": "A. Tạm dừng việc thực thi malware tại các vị trí xác định.\nBreakpoint giúp dừng chương trình để kiểm tra thanh ghi, bộ nhớ và luồng thực thi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_229",
          "slide": "slide_229.png",
          "slide_webp": "slides/IAM302/slide_229.webp",
          "inline_webp": null,
          "question": "What is the purpose of taking a \"before\" and \"after\" snapshot of the Windows registry using Regshot?",
          "options": {
            "A": "To compare system performance",
            "B": "To analyze network traffic",
            "C": "To detect changes made by software installations or modifications",
            "D": "To optimize CPU usage"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục đích của việc chụp Registry Windows trước và sau bằng Regshot là gì?",
          "vi_explanation": "C. Phát hiện các thay đổi do việc cài đặt hoặc sửa đổi phần mềm.\nRegshot so sánh hai snapshot Registry để xác định các thay đổi do malware hoặc phần mềm tạo ra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_230",
          "slide": "slide_230.png",
          "slide_webp": "slides/IAM302/slide_230.webp",
          "inline_webp": null,
          "question": "What is the primary purpose of sandbox analysis in malware analysis?",
          "options": {
            "A": "To permanently remove malware from the system",
            "B": "To create a safe environment for testing software",
            "C": "To monitor network traffic for suspicious activity",
            "D": "To encrypt sensitive data to prevent unauthorized access"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích chính của phân tích bằng sandbox trong phân tích malware là gì?",
          "vi_explanation": "B. Tạo một môi trường an toàn để kiểm tra phần mềm.\nSandbox là môi trường cô lập dùng để quan sát hành vi của malware một cách an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_231",
          "slide": "slide_231.png",
          "slide_webp": "slides/IAM302/slide_231.webp",
          "inline_webp": null,
          "question": "What is Volatility in the context of memory forensics?",
          "options": {
            "A": "A measure of system instability caused by malware",
            "B": "A forensic analysis tool used to investigate network traffic",
            "C": "A framework for analyzing memory dumps of compromised systems",
            "D": "A method for encrypting sensitive data stored in RAM"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Volatility là gì trong lĩnh vực memory forensics?",
          "vi_explanation": "C. Một framework dùng để phân tích memory dump của các hệ thống bị xâm nhập.\nVolatility hỗ trợ phân tích RAM dump, trích xuất tiến trình, DLL, Registry và nhiều bằng chứng khác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_232",
          "slide": "slide_232.png",
          "slide_webp": "slides/IAM302/slide_232.webp",
          "inline_webp": null,
          "question": "What is the primary goal of memory forensics?",
          "options": {
            "A": "Recovering deleted files from storage devices",
            "B": "Analyzing network traffic for security threats",
            "C": "Extracting information from volatile memory of a system",
            "D": "Decrypting encrypted files on disk"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục tiêu chính của memory forensics là gì?",
          "vi_explanation": "C. Trích xuất thông tin từ bộ nhớ tạm thời (RAM) của hệ thống.\nMemory forensics tập trung phân tích dữ liệu đang tồn tại trong RAM để phục vụ điều tra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_233",
          "slide": "slide_233.png",
          "slide_webp": "slides/IAM302/slide_233.webp",
          "inline_webp": null,
          "question": "What is the purpose of taking a \"before\" and \"after\" snapshot of the Windows registry using Regshot?",
          "options": {
            "A": "To compare system performance",
            "B": "To analyze network traffic",
            "C": "To detect changes made by software installations or modifications",
            "D": "To optimize CPU usage"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục đích của việc chụp Registry Windows trước và sau bằng Regshot là gì?",
          "vi_explanation": "C. Phát hiện các thay đổi do việc cài đặt hoặc sửa đổi phần mềm.\nSo sánh hai snapshot giúp xác định Registry key hoặc value bị malware thay đổi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_234",
          "slide": "slide_234.png",
          "slide_webp": "slides/IAM302/slide_234.webp",
          "inline_webp": null,
          "question": "What is the first step in the process of memory forensics?",
          "options": {
            "A": "Extracting files from the disk",
            "B": "Creating a memory dump of the target system",
            "C": "Analyzing network traffic",
            "D": "Scanning for malware signatures"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Bước đầu tiên của quy trình memory forensics là gì?",
          "vi_explanation": "B. Tạo bản sao bộ nhớ (memory dump) của hệ thống cần điều tra.\nCần thu thập RAM trước khi tiến hành bất kỳ bước phân tích nào.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_235",
          "slide": "slide_235.png",
          "slide_webp": "slides/IAM302/slide_235.webp",
          "inline_webp": null,
          "question": "What is the main characteristic of a rootkit?",
          "options": {
            "A": "It displays unwanted advertisements",
            "B": "It encrypts files and demands ransom",
            "C": "It provides remote access to a compromised system",
            "D": "It hides its presence on a system and grants unauthorized access"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Đặc điểm chính của rootkit là gì?",
          "vi_explanation": "D. Che giấu sự hiện diện của nó trên hệ thống và cấp quyền truy cập trái phép.\nRootkit giúp malware ẩn mình và duy trì quyền truy cập với đặc quyền cao.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_236",
          "slide": "slide_236.png",
          "slide_webp": "slides/IAM302/slide_236.webp",
          "inline_webp": null,
          "question": "What is a packer in the context of malware?",
          "options": {
            "A": "A device used to physically secure a computer",
            "B": "A tool used to expand malware files",
            "C": "A technique used to hide malware from detection",
            "D": "A type of malware designed to infiltrate networks"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Packer trong lĩnh vực malware là gì?",
          "vi_explanation": "C. Một kỹ thuật dùng để che giấu malware khỏi bị phát hiện.\nPacker nén hoặc mã hóa tệp thực thi để gây khó khăn cho việc phát hiện và phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_237",
          "slide": "slide_237.png",
          "slide_webp": "slides/IAM302/slide_237.webp",
          "inline_webp": null,
          "question": "What is the main limitation of using a debugger in malware analysis?",
          "options": {
            "A": "It requires extensive network resources",
            "B": "It cannot analyze malware behavior in real-time",
            "C": "It may trigger anti-debugging techniques employed by malware",
            "D": "It is only effective for analyzing known malware strains"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Hạn chế lớn nhất của việc sử dụng debugger trong phân tích malware là gì?",
          "vi_explanation": "C. Có thể kích hoạt các kỹ thuật chống gỡ lỗi (anti-debugging) của malware.\nNhiều malware phát hiện debugger và thay đổi hành vi hoặc tự kết thúc để tránh bị phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_238",
          "slide": "slide_238.png",
          "slide_webp": "slides/IAM302/slide_238.webp",
          "inline_webp": null,
          "question": "What is a common use of LordPE in malware analysis?",
          "options": {
            "A": "Decrypting encrypted malware payloads",
            "B": "Generating antivirus signatures",
            "C": "Analyzing and modifying the import table of malware executables",
            "D": "Monitoring system logs"
          },
          "correct": [
            "C"
          ],
          "vi_question": "LordPE thường được dùng để làm gì trong phân tích malware?",
          "vi_explanation": "C. Phân tích và chỉnh sửa Import Table của tệp thực thi malware.\nLordPE là công cụ chỉnh sửa cấu trúc PE, đặc biệt hữu ích khi xem hoặc sửa Import Table.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_239",
          "slide": "slide_239.png",
          "slide_webp": "slides/IAM302/slide_239.webp",
          "inline_webp": null,
          "question": "What is a key aspect of the final stage of memory forensics?",
          "options": {
            "A": "Removing all malware traces from the system",
            "B": "Generating a detailed report of findings",
            "C": "Restoring the system to a previous state",
            "D": "Encrypting sensitive data found in the memory dump"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Một khía cạnh quan trọng của giai đoạn cuối trong memory forensics là gì?",
          "vi_explanation": "B. Tạo báo cáo chi tiết về các phát hiện.\nBáo cáo pháp y ghi lại toàn bộ quy trình và bằng chứng phục vụ điều tra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_240",
          "slide": "slide_240.png",
          "slide_webp": "slides/IAM302/slide_240.webp",
          "inline_webp": null,
          "question": "What is Volatility in the context of memory forensics?",
          "options": {
            "A": "A measure of system instability caused by malware",
            "B": "A forensic analysis tool used to investigate network traffic",
            "C": "A framework for analyzing memory dumps of compromised systems",
            "D": "A method for encrypting sensitive data stored in RAM"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Volatility là gì trong lĩnh vực memory forensics?",
          "vi_explanation": "C. Một framework dùng để phân tích memory dump của các hệ thống bị xâm nhập.\nĐây là công cụ tiêu chuẩn trong điều tra bộ nhớ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_241",
          "slide": "slide_241.png",
          "slide_webp": "slides/IAM302/slide_241.webp",
          "inline_webp": null,
          "question": "What is malware analysis?",
          "options": {
            "A": "Analyzing potential malware threats to a system",
            "B": "Analyzing computer hardware for vulnerabilities",
            "C": "Analyzing network traffic for suspicious activity",
            "D": "Analyzing software to understand its behavior and purpose"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Malware analysis là gì?",
          "vi_explanation": "D. Phân tích phần mềm để hiểu hành vi và mục đích của nó.\nMalware analysis nhằm xác định cách malware hoạt động, mục tiêu và tác động của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_242",
          "slide": "slide_242.png",
          "slide_webp": "slides/IAM302/slide_242.webp",
          "inline_webp": null,
          "question": "What is static analysis in malware analysis?",
          "options": {
            "A": "Running the malware in a controlled environment",
            "B": "Analyzing the behavior of malware as it executes",
            "C": "Examining the code and structure of malware without executing it",
            "D": "Monitoring network traffic for signs of malware activity"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Static analysis trong phân tích malware là gì?",
          "vi_explanation": "C. Phân tích mã và cấu trúc của malware mà không thực thi nó.\nStatic analysis kiểm tra mã, PE header, chuỗi ký tự và các đặc điểm khác mà không chạy malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_243",
          "slide": "slide_243.png",
          "slide_webp": "slides/IAM302/slide_243.webp",
          "inline_webp": null,
          "question": "What is a benefit of using sandbox analysis for malware detection?",
          "options": {
            "A": "It relies on predefined signatures for detection",
            "B": "It enables real-time protection against all types of malware",
            "C": "It can detect previously unknown and zero-day threats",
            "D": "It requires minimal computational resources"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một lợi ích của việc sử dụng sandbox trong phát hiện malware là gì?",
          "vi_explanation": "C. Có thể phát hiện các mối đe dọa chưa từng biết và zero-day.\nSandbox dựa trên hành vi nên có thể phát hiện malware mới chưa có chữ ký.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_244",
          "slide": "slide_244.png",
          "slide_webp": "slides/IAM302/slide_244.webp",
          "inline_webp": null,
          "question": "What is the purpose of the network layer in sandbox architecture?",
          "options": {
            "A": "To prevent malware from escaping the sandbox",
            "B": "To control the Internet connection to the sandbox environment",
            "C": "To analyze malware behavior and generate reports",
            "D": "To execute and monitor code in isolated environments"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích của tầng mạng (network layer) trong kiến trúc sandbox là gì?",
          "vi_explanation": "B. Kiểm soát kết nối Internet tới môi trường sandbox.\nNetwork layer quản lý và giám sát lưu lượng mạng của malware khi chạy trong sandbox.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_245",
          "slide": "slide_245.png",
          "slide_webp": "slides/IAM302/slide_245.webp",
          "inline_webp": null,
          "question": "What is a common method used in dynamic analysis of malware?",
          "options": {
            "A": "Disassembling the malware code",
            "B": "Running the malware in a controlled environment",
            "C": "Identifying the malware's author",
            "D": "Searching for similar malware online"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Phương pháp nào thường được sử dụng trong phân tích malware động?",
          "vi_explanation": "B. Chạy malware trong một môi trường được kiểm soát.\nDynamic analysis thực thi malware trong máy ảo hoặc sandbox để quan sát hành vi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_246",
          "slide": "slide_246.png",
          "slide_webp": "slides/IAM302/slide_246.webp",
          "inline_webp": null,
          "question": "Which type of malware spreads rapidly through a network by exploiting vulnerabilities?",
          "options": {
            "A": "Trojan",
            "B": "Worm",
            "C": "Rootkit",
            "D": "Adware"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Loại malware nào lây lan nhanh qua mạng bằng cách khai thác lỗ hổng bảo mật?",
          "vi_explanation": "B. Worm\nWorm có khả năng tự sao chép và lây lan qua mạng mà không cần người dùng can thiệp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_247",
          "slide": "slide_247.png",
          "slide_webp": "slides/IAM302/slide_247.webp",
          "inline_webp": null,
          "question": "What is the purpose of the network layer in sandbox architecture?",
          "options": {
            "A": "To prevent malware from escaping the sandbox",
            "B": "To control the Internet connection to the sandbox environment",
            "C": "To analyze malware behavior and generate reports",
            "D": "To execute and monitor code in isolated environments"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Mục đích của tầng mạng (network layer) trong kiến trúc sandbox là gì?",
          "vi_explanation": "B. Kiểm soát kết nối Internet tới môi trường sandbox.\nTầng mạng giúp theo dõi, giới hạn hoặc mô phỏng kết nối mạng của malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_248",
          "slide": "slide_248.png",
          "slide_webp": "slides/IAM302/slide_248.webp",
          "inline_webp": null,
          "question": "What is a first-chance exception in debugging?",
          "options": {
            "A": "When malware crashes the system",
            "B": "When the program requests admin access",
            "C": "When the debugger is first given control after an exception",
            "D": "When a program finishes execution"
          },
          "correct": [
            "C"
          ],
          "vi_question": "First-chance exception trong debugging là gì?",
          "vi_explanation": "C. Thời điểm debugger được trao quyền điều khiển ngay sau khi xảy ra một exception.\nFirst-chance exception cho phép debugger xử lý ngoại lệ trước khi chương trình hoặc hệ điều hành xử lý tiếp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_249",
          "slide": "slide_249.png",
          "slide_webp": "slides/IAM302/slide_249.webp",
          "inline_webp": null,
          "question": "What are the three main types of Malware Analysis methods?",
          "options": {
            "A": "Online, Offline, Cloud",
            "B": "Static, Dynamic, Hybrid",
            "C": "Basic, Advanced, Complex",
            "D": "Al-based, Machine Learning-based, Manual"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Ba phương pháp chính của phân tích malware là gì?",
          "vi_explanation": "B. Static, Dynamic, Hybrid\nBa phương pháp phổ biến là Static Analysis (không chạy malware), Dynamic Analysis (chạy trong môi trường an toàn) và Hybrid Analysis (kết hợp cả hai).",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_250",
          "slide": "slide_250.png",
          "slide_webp": "slides/IAM302/slide_250.webp",
          "inline_webp": null,
          "question": "What does the INT 3 instruction (0xCC) do in software breakpoints?",
          "options": {
            "A": "Encrypts memory",
            "B": "Triggers an exception to pause execution",
            "C": "Changes file permissions",
            "D": "Deletes system logs"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Lệnh INT 3 (0xCC) có tác dụng gì trong software breakpoint?",
          "vi_explanation": "B. Kích hoạt một ngoại lệ (exception) để tạm dừng việc thực thi.\nINT 3 là lệnh breakpoint của x86, tạo một exception để debugger giành quyền điều khiển chương trình.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_251",
          "slide": "slide_251.png",
          "slide_webp": "slides/IAM302/slide_251.webp",
          "inline_webp": null,
          "question": "What does sandbox analysis help researchers to observe?",
          "options": {
            "A": "Malware behavior without risking system damage",
            "B": "Computer hardware performance",
            "C": "Internet browsing habits of users",
            "D": "System configuration details"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Phân tích bằng sandbox giúp các nhà nghiên cứu quan sát điều gì?",
          "vi_explanation": "A. Hành vi của malware mà không gây rủi ro cho hệ thống.\nSandbox chạy malware trong môi trường cách ly để quan sát hành vi một cách an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_252",
          "slide": "slide_252.png",
          "slide_webp": "slides/IAM302/slide_252.webp",
          "inline_webp": null,
          "question": "What does the term \"Ransomware\" refer to?",
          "options": {
            "A": "Malware that slows down computer performance",
            "B": "Malware that steals sensitive information",
            "C": "Malware that encrypts files and demands payment for decryption",
            "D": "Malware that deletes files and folders without user consent"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thuật ngữ Ransomware dùng để chỉ điều gì?",
          "vi_explanation": "C. Malware mã hóa tệp và yêu cầu trả tiền để giải mã.\nRansomware khóa hoặc mã hóa dữ liệu của nạn nhân và đòi tiền chuộc để khôi phục.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_253",
          "slide": "slide_253.png",
          "slide_webp": "slides/IAM302/slide_253.webp",
          "inline_webp": null,
          "question": "What does OllyDbg's \"Memory Map\" feature allow analysts to do during malware analysis?",
          "options": {
            "A": "Analyze network traffic",
            "B": "View a map of memory allocations and sections",
            "C": "Monitor system performance",
            "D": "Decrypt encrypted malware payloads"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tính năng Memory Map của OllyDbg cho phép nhà phân tích làm gì?",
          "vi_explanation": "B. Xem bản đồ các vùng cấp phát bộ nhớ và các section.\nMemory Map hiển thị các vùng nhớ, module và quyền truy cập, hỗ trợ phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_254",
          "slide": "slide_254.png",
          "slide_webp": "slides/IAM302/slide_254.webp",
          "inline_webp": null,
          "question": "What does a debugger allow you to do during malware analysis?",
          "options": {
            "A": "Encrypt malware files",
            "B": "Modify code comments",
            "C": "View and change memory, registers, and function arguments",
            "D": "Compile malware source code"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Debugger cho phép bạn làm gì trong quá trình phân tích malware?",
          "vi_explanation": "C. Xem và thay đổi bộ nhớ, thanh ghi và các đối số của hàm.\nDebugger giúp theo dõi và chỉnh sửa trạng thái thực thi của chương trình trong thời gian chạy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_255",
          "slide": "slide_255.png",
          "slide_webp": "slides/IAM302/slide_255.webp",
          "inline_webp": null,
          "question": "What distinguishes cryptoviral extortion ransomware from simpler forms?",
          "options": {
            "A": "Uses social engineering only",
            "B": "Automatically deletes user data",
            "C": "Sends spam emails",
            "D": "Encrypts user files and demands payment"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Điều gì phân biệt ransomware kiểu cryptoviral extortion với các dạng đơn giản hơn?",
          "vi_explanation": "D. Mã hóa các tệp của người dùng và yêu cầu thanh toán.\nCryptoviral ransomware sử dụng mã hóa mạnh để khóa dữ liệu, sau đó đòi tiền chuộc để cung cấp khóa giải mã.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_256",
          "slide": "slide_256.png",
          "slide_webp": "slides/IAM302/slide_256.webp",
          "inline_webp": null,
          "question": "What ethical considerations should malware analysts keep in mind during their work?",
          "options": {
            "A": "Ensuring complete anonymity when analyzing malware",
            "B": "Respecting privacy and legal boundaries when handling samples",
            "C": "Sharing malware samples freely with other analysts",
            "D": "Using malware for personal gain or hacking activities"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Nhà phân tích malware cần lưu ý vấn đề đạo đức nào trong công việc?",
          "vi_explanation": "B. Tôn trọng quyền riêng tư và các giới hạn pháp lý khi xử lý mẫu malware.\nMalware phải được phân tích trong môi trường hợp pháp, an toàn và không vi phạm quyền riêng tư.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_257",
          "slide": "slide_257.png",
          "slide_webp": "slides/IAM302/slide_257.webp",
          "inline_webp": null,
          "question": "What advantage does Regshot offer in comparison to manual registry monitoring?",
          "options": {
            "A": "It provides real-time monitoring",
            "B": "It automatically creates reports",
            "C": "It captures changes in a snapshot format for easy comparison",
            "D": "It can be used to monitor file system activity"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Regshot có ưu điểm gì so với việc theo dõi Registry thủ công?",
          "vi_explanation": "C. Chụp snapshot để dễ dàng so sánh các thay đổi.\nRegshot tạo ảnh chụp Registry trước và sau khi chạy malware để xác định các thay đổi.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_258",
          "slide": "slide_258.png",
          "slide_webp": "slides/IAM302/slide_258.webp",
          "inline_webp": null,
          "question": "What role does the virtualization layer play in sandbox architecture?",
          "options": {
            "A": "It analyzes network traffic for suspicious activity",
            "B": "It generates reports on sandbox activities",
            "C": "It creates isolated environments for executing untrusted code",
            "D": "It prevents malware from escaping the sandbox"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Lớp ảo hóa (virtualization layer) đóng vai trò gì trong kiến trúc sandbox?",
          "vi_explanation": "C. Tạo môi trường cô lập để thực thi mã không đáng tin cậy.\nVirtualization tạo máy ảo hoặc môi trường cách ly giúp malware không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_259",
          "slide": "slide_259.png",
          "slide_webp": "slides/IAM302/slide_259.webp",
          "inline_webp": null,
          "question": "What kind of activities can Process Monitor track during malware analysis?",
          "options": {
            "A": "Only network traffic",
            "B": "Only software installations",
            "C": "System processes, file system activity, and registry changes",
            "D": "Only CPU usage"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Process Monitor có thể theo dõi những hoạt động nào trong quá trình phân tích malware?",
          "vi_explanation": "C. Tiến trình hệ thống, hoạt động của hệ thống tệp và thay đổi Registry.\nProcess Monitor ghi lại các hoạt động của process, file system và Registry theo thời gian thực.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_260",
          "slide": "slide_260.png",
          "slide_webp": "slides/IAM302/slide_260.webp",
          "inline_webp": null,
          "question": "What role does reverse engineering play in malware analysis?",
          "options": {
            "A": "Analyzing malware behavior in real-time",
            "B": "Creating new malware samples",
            "C": "Understanding how malware operates by dissecting its code",
            "D": "Deploying countermeasures to prevent malware infections"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Reverse engineering đóng vai trò gì trong phân tích malware?",
          "vi_explanation": "C. Hiểu cách malware hoạt động bằng cách phân tích mã của nó.\nReverse engineering giúp xác định thuật toán, chức năng và mục đích của malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_261",
          "slide": "slide_261.png",
          "slide_webp": "slides/IAM302/slide_261.webp",
          "inline_webp": null,
          "question": "What role does the virtualization layer play in sandbox architecture?",
          "options": {
            "A": "It analyzes network traffic for suspicious activity",
            "B": "It generates reports on sandbox activities",
            "C": "It creates isolated environments for executing untrusted code",
            "D": "It prevents malware from escaping the sandbox"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Lớp ảo hóa (virtualization layer) đóng vai trò gì trong kiến trúc sandbox?",
          "vi_explanation": "C. Tạo môi trường cô lập để thực thi mã không đáng tin cậy.\nĐây là thành phần cốt lõi giúp sandbox chạy malware an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_262",
          "slide": "slide_262.png",
          "slide_webp": "slides/IAM302/slide_262.webp",
          "inline_webp": null,
          "question": "What type of information can be extracted from the Windows registry using RegRipper?",
          "options": {
            "A": "Only user passwords",
            "B": "Only file system information",
            "C": "System configurations, user activities, and installed software details",
            "D": "Only network configurations"
          },
          "correct": [
            "C"
          ],
          "vi_question": "RegRipper có thể trích xuất loại thông tin nào từ Windows Registry?",
          "vi_explanation": "C. Cấu hình hệ thống, hoạt động của người dùng và thông tin về phần mềm đã cài đặt.\nRegRipper phân tích Registry để thu thập nhiều bằng chứng phục vụ điều tra số.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_263",
          "slide": "slide_263.png",
          "slide_webp": "slides/IAM302/slide_263.webp",
          "inline_webp": null,
          "question": "Which of the following is a characteristic of behavior-based malware detection?",
          "options": {
            "A": "It relies solely on virus signatures",
            "B": "It detects malware based on known patterns",
            "C": "It monitors system activities for suspicious behavior",
            "D": "It is ineffective against zero-day attacks"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đặc điểm nào sau đây thuộc về phương pháp phát hiện malware dựa trên hành vi (behavior-based detection)?",
          "vi_explanation": "C. Theo dõi các hoạt động của hệ thống để phát hiện hành vi đáng ngờ.\nBehavior-based detection không chỉ dựa vào chữ ký mà còn quan sát hành vi bất thường của chương trình.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_264",
          "slide": "slide_264.png",
          "slide_webp": "slides/IAM302/slide_264.webp",
          "inline_webp": null,
          "question": "Which of the following can Volatility extract from a memory dump, according to the document?",
          "options": {
            "A": "Live registry hives and network connections",
            "B": "Source code of running applications",
            "C": "Hardware configuration details",
            "D": "Permanent file system changes GGGEEGLGEGEGLELELELEBERERESRSBSS"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Theo tài liệu, Volatility có thể trích xuất gì từ memory dump?",
          "vi_explanation": "A. Registry hives đang hoạt động và các kết nối mạng.\nVolatility hỗ trợ trích xuất tiến trình, Registry, DLL, network connections và nhiều dữ liệu khác từ RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_265",
          "slide": "slide_265.png",
          "slide_webp": "slides/IAM302/slide_265.webp",
          "inline_webp": null,
          "question": "Which of the following best describes sandbox architecture?",
          "options": {
            "A": "A physical box filled with sand",
            "B": "A virtual environment for running untrusted programs",
            "C": "A type of building construction technique",
            "D": "A framework for organizing computer files"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Kiến trúc sandbox được mô tả đúng nhất là gì?",
          "vi_explanation": "B. Một môi trường ảo để chạy các chương trình không đáng tin cậy.\nSandbox là môi trường cách ly nhằm thực thi và quan sát phần mềm nghi ngờ một cách an toàn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_266",
          "slide": "slide_266.png",
          "slide_webp": "slides/IAM302/slide_266.webp",
          "inline_webp": null,
          "question": "Which of the following best describes how a worm spreads in a network?",
          "options": {
            "A": "By requiring user interaction to execute and propagate",
            "B": "By attaching itself to executable files and spreading upon execution",
            "C": "By autonomously scanning for vulnerable systems and replicating itself",
            "D": "By encrypting data and demanding a ransom from the user"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mô tả nào đúng nhất về cách một worm lây lan trong mạng?",
          "vi_explanation": "C. Tự động quét các hệ thống có lỗ hổng và tự sao chép sang chúng.\nWorm không cần người dùng can thiệp mà tự khai thác lỗ hổng để lây lan qua mạng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_267",
          "slide": "slide_267.png",
          "slide_webp": "slides/IAM302/slide_267.webp",
          "inline_webp": null,
          "question": "Which of the following is not a common way to protect against malware threats?",
          "options": {
            "A": "Installing reputable antivirus software",
            "B": "Keeping software and operating systems updated",
            "C": "Sharing passwords with trusted friends",
            "D": "Avoiding clicking on suspicious links or pop-ups"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Phương pháp nào sau đây không phải là cách phổ biến để bảo vệ khỏi các mối đe dọa malware?",
          "vi_explanation": "C. Chia sẻ mật khẩu với bạn bè đáng tin cậy.\nChia sẻ mật khẩu làm tăng nguy cơ lộ thông tin. Các biện pháp đúng là dùng antivirus, cập nhật phần mềm và tránh các liên kết đáng ngờ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_268",
          "slide": "slide_268.png",
          "slide_webp": "slides/IAM302/slide_268.webp",
          "inline_webp": null,
          "question": "Which of the following is an advantage of using application whitelisting as a malware prevention technique?",
          "options": {
            "A": "It requires constant updates to maintain effectiveness",
            "B": "It restricts system access to pre-approved applications",
            "C": "It relies on heuristic analysis to detect threats",
            "D": "It increases vulnerability to zero-day attacks"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Ưu điểm của việc sử dụng application whitelisting để phòng chống malware là gì?",
          "vi_explanation": "B. Chỉ cho phép các ứng dụng đã được phê duyệt chạy trên hệ thống.\nApplication whitelisting ngăn các chương trình không được phép thực thi, giảm nguy cơ malware chạy trên máy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_269",
          "slide": "slide_269.png",
          "slide_webp": "slides/IAM302/slide_269.webp",
          "inline_webp": null,
          "question": "Which of the following is a common characteristic of polymorphic malware?",
          "options": {
            "A": "It targets only specific geographic regions",
            "B": "It changes its code structure to evade detection",
            "C": "It requires user interaction to spread",
            "D": "It is primarily distributed through social media platforms"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Đặc điểm phổ biến của malware đa hình (polymorphic malware) là gì?",
          "vi_explanation": "B. Thay đổi cấu trúc mã để tránh bị phát hiện.\nPolymorphic malware liên tục thay đổi mã hoặc mã hóa lại chính nó nhằm né tránh phát hiện bằng chữ ký.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_270",
          "slide": "slide_270.png",
          "slide_webp": "slides/IAM302/slide_270.webp",
          "inline_webp": null,
          "question": "Which of the following is a characteristic of behavior-based malware detection?",
          "options": {
            "A": "It relies solely on virus signatures",
            "B": "It detects malware based on known patterns",
            "C": "It monitors system activities for suspicious behavior",
            "D": "It is ineffective against zero-day attacks"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đặc điểm của phương pháp phát hiện malware dựa trên hành vi (behavior-based detection) là gì?",
          "vi_explanation": "C. Theo dõi hoạt động của hệ thống để phát hiện hành vi đáng ngờ.\nPhương pháp này phát hiện malware dựa trên hành vi thay vì chỉ dựa vào chữ ký.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_271",
          "slide": "slide_271.png",
          "slide_webp": "slides/IAM302/slide_271.webp",
          "inline_webp": null,
          "question": "Which of the following is the use of id() function in Python?",
          "options": {
            "A": "Every object in Python doesn't have a unique id",
            "B": "In Python id function returns the identity of the object",
            "C": "None of the mentioned",
            "D": "All of the mentioned"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Hàm id() trong Python dùng để làm gì?",
          "vi_explanation": "B. Trả về định danh (identity) của đối tượng.\nid() trả về một giá trị duy nhất đại diện cho đối tượng trong bộ nhớ trong suốt vòng đời của đối tượng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_272",
          "slide": "slide_272.png",
          "slide_webp": "slides/IAM302/slide_272.webp",
          "inline_webp": null,
          "question": "Which scenario necessitates connecting two computers together when debugging in malware analysis?",
          "options": {
            "A": "When conducting kernel-mode debugging on a Windows system",
            "B": "When performing static analysis of malware code",
            "C": "When analyzing network traffic generated by the malware",
            "D": "When using a sandbox environment for dynamic malware analysis"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Trường hợp nào cần kết nối hai máy tính với nhau khi debug malware?",
          "vi_explanation": "A. Khi thực hiện kernel-mode debugging trên Windows.\nKernel debugging truyền thống yêu cầu một máy chạy chương trình và một máy chạy debugger.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_273",
          "slide": "slide_273.png",
          "slide_webp": "slides/IAM302/slide_273.webp",
          "inline_webp": null,
          "question": "Which statement best reflects a realistic goal of malware analysis?’",
          "options": {
            "A": "Writing new types of malware for research",
            "B": "Detecting and analyzing malware purely for academic purposes",
            "C": "Avoiding malware lab setups due to safety concerns",
            "D": "Applying malware analysis to real-world incident response"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Phát biểu nào phản ánh đúng mục tiêu thực tế của phân tích malware?",
          "vi_explanation": "D. Áp dụng phân tích malware vào ứng phó sự cố trong thực tế.\nMalware analysis hỗ trợ điều tra và xử lý các sự cố an toàn thông tin ngoài môi trường học thuật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_274",
          "slide": "slide_274.png",
          "slide_webp": "slides/IAM302/slide_274.webp",
          "inline_webp": null,
          "question": "Which one of the following is the use of function in Python?",
          "options": {
            "A": "Functions don't provide better modularity for your application",
            "B": "You can't also create your own functions",
            "C": "Functions are reusable pieces of programs",
            "D": "All of the mentioned"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Chức năng của function trong Python là gì?",
          "vi_explanation": "C. Function là những đoạn chương trình có thể tái sử dụng.\nFunction giúp chia nhỏ chương trình, tăng tính tái sử dụng và dễ bảo trì.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_275",
          "slide": "slide_275.png",
          "slide_webp": "slides/IAM302/slide_275.webp",
          "inline_webp": null,
          "question": "How does the reporting module contribute to sandbox architecture?",
          "options": {
            "A": "It analyzes malware behavior and generates detailed reports for analysis",
            "B": "It encrypts sensitive data to prevent unauthorized access",
            "C": "It provides internet connectivity to the sandbox environment",
            "D": "It stores sandbox activity logs for future reference"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Module báo cáo (reporting module) đóng góp gì trong kiến trúc sandbox?",
          "vi_explanation": "A. Phân tích hành vi malware và tạo báo cáo chi tiết.\nReporting module tổng hợp các hành vi quan sát được thành báo cáo phục vụ phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_276",
          "slide": "slide_276.png",
          "slide_webp": "slides/IAM302/slide_276.webp",
          "inline_webp": null,
          "question": "How does PEID determine the packer used in an executable file?",
          "options": {
            "A": "By analyzing the file's header",
            "B": "By scanning the file for known packer signatures",
            "C": "By decrypting the file's contents",
            "D": "By executing the file in a sandbox environment"
          },
          "correct": [
            "B"
          ],
          "vi_question": "PEID xác định packer của tệp thực thi bằng cách nào?",
          "vi_explanation": "B. Quét tệp để tìm các chữ ký (signature) của packer đã biết.\nPEID so khớp các mẫu packer với cơ sở dữ liệu signature để nhận diện packer.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_277",
          "slide": "slide_277.png",
          "slide_webp": "slides/IAM302/slide_277.webp",
          "inline_webp": null,
          "question": "Why is it important for malware analysts to stay updated with the latest trends and techniques?",
          "options": {
            "A": "To impress potential employers with up-to-date knowledge",
            "B": "To develop a better understanding of historical malware",
            "C": "To adapt to evolving malware threats and detection methods",
            "D": "To gain access to restricted malware analysis forums"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Tại sao các nhà phân tích malware cần cập nhật các xu hướng và kỹ thuật mới nhất?",
          "vi_explanation": "C. Để thích nghi với các mối đe dọa và phương pháp phát hiện đang phát triển.\nMalware luôn thay đổi, vì vậy người phân tích phải cập nhật kiến thức và công cụ mới.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_278",
          "slide": "slide_278.png",
          "slide_webp": "slides/IAM302/slide_278.webp",
          "inline_webp": null,
          "question": "Why does malware writer attempt to pack his malware?",
          "options": {
            "A": "To make it harder to detect and to analyze",
            "B": "To make it easier to implement",
            "C": "To make it simpler for reading",
            "D": "None of the other choices"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Tại sao tác giả malware lại đóng gói (pack) malware?",
          "vi_explanation": "A. Để khó bị phát hiện và khó phân tích hơn.\nPacking giúp che giấu mã thực thi và gây khó khăn cho việc reverse engineering.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_279",
          "slide": "slide_279.png",
          "slide_webp": "slides/IAM302/slide_279.webp",
          "inline_webp": null,
          "question": "Why do malware analysts often use assembly-level debuggers?",
          "options": {
            "A": "They prefer C++ syntax",
            "B": "They rarely have access to source code",
            "C": "Assembly debuggers are faster",
            "D": "They are used for networking"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tại sao các nhà phân tích malware thường sử dụng debugger ở mức Assembly?",
          "vi_explanation": "B. Vì họ hiếm khi có mã nguồn của chương trình.\nMalware thường chỉ có dạng file thực thi, nên cần phân tích ở mức Assembly.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_280",
          "slide": "slide_280.png",
          "slide_webp": "slides/IAM302/slide_280.webp",
          "inline_webp": null,
          "question": "Why are lists not allowed as dictionary keys in Python, as per the document?",
          "options": {
            "A": "They are too large for efficient hashing",
            "B": "They are slower to access than strings",
            "C": "They can be changed in place, disrupting hashing",
            "D": "They are restricted to numerical values"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Tại sao list không thể làm key của dictionary trong Python?",
          "vi_explanation": "C. Vì list có thể thay đổi, làm mất tính ổn định của hàm băm (hash).\nDictionary yêu cầu key phải là đối tượng immutable và hashable.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_281",
          "slide": "slide_281.png",
          "slide_webp": "slides/IAM302/slide_281.webp",
          "inline_webp": null,
          "question": "Why should malware analysis be conducted in an isolated lab environment?",
          "options": {
            "A": "To reduce power usage",
            "B": "To execute malware under controlled and safe conditions",
            "C": "To allow malware to spread faster",
            "D": "To test antivirus software on production servers"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tại sao việc phân tích malware nên được thực hiện trong môi trường phòng lab cách ly?",
          "vi_explanation": "B. Để thực thi malware trong điều kiện an toàn và được kiểm soát.\nMôi trường cách ly giúp ngăn malware lây lan sang hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_282",
          "slide": "slide_282.png",
          "slide_webp": "slides/IAM302/slide_282.webp",
          "inline_webp": null,
          "question": "A forensic analyst is using Autopsy for memory forensics. What is one advantage?",
          "options": {
            "A": "Real-time network sniffing",
            "B": "GPU acceleration",
            "C": "Graphical interface for investigators",
            "D": "Password cracking"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Một ưu điểm của Autopsy trong memory forensics là gì?",
          "vi_explanation": "C. Cung cấp giao diện đồ họa thân thiện cho điều tra viên.\nAutopsy giúp phân tích dữ liệu bằng giao diện GUI thay vì chỉ dùng dòng lệnh.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_283",
          "slide": "slide_283.png",
          "slide_webp": "slides/IAM302/slide_283.webp",
          "inline_webp": null,
          "question": "A malware decrypts strings during runtime. Which debugging approach is most effective for capturing the plaintext strings?",
          "options": {
            "A": "Set a breakpoint after the decryption routine executes",
            "B": "Step-over all function calls in the debugger",
            "C": "Set a breakpoint before the decryption routine starts",
            "D": "Analyze the binary using a disassembler without execution"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Malware giải mã chuỗi trong thời gian chạy. Cách debug nào hiệu quả nhất để thu được chuỗi đã giải mã?",
          "vi_explanation": "A. Đặt breakpoint sau khi hàm giải mã thực thi xong.\nSau khi hàm giải mã hoàn thành, chuỗi đã ở dạng plaintext và có thể quan sát trực tiếp trong bộ nhớ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_284",
          "slide": "slide_284.png",
          "slide_webp": "slides/IAM302/slide_284.webp",
          "inline_webp": null,
          "question": "After acquiring a memory dump, what is the next step in memory forensics?",
          "options": {
            "A": "Running antivirus scans",
            "B": "Analyzing the contents of the dump using specialized tools",
            "C": "Rebooting the system",
            "D": "Checking system logs"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Sau khi thu thập memory dump, bước tiếp theo trong memory forensics là gì?",
          "vi_explanation": "B. Phân tích nội dung của memory dump bằng các công cụ chuyên dụng.\nCác công cụ như Volatility được sử dụng để phân tích dữ liệu trong RAM.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_285",
          "slide": "slide_285.png",
          "slide_webp": "slides/IAM302/slide_285.webp",
          "inline_webp": null,
          "question": "After a JZ operation, IDA Pro shows a red arrow. What does that mean?",
          "options": {
            "A": "Broken link",
            "B": "Code to be executed if the result was zero",
            "C": "Code to be executed if the result was not zero",
            "D": "Just a decoration"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Sau lệnh JZ, IDA Pro hiển thị mũi tên màu đỏ có ý nghĩa gì?",
          "vi_explanation": "C. Đường đi được thực thi nếu kết quả không bằng 0.\nTrong Graph View của IDA Pro, mũi tên xanh là nhánh điều kiện đúng (JZ được thực hiện), còn mũi tên đỏ là nhánh không thỏa điều kiện.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_286",
          "slide": "slide_286.png",
          "slide_webp": "slides/IAM302/slide_286.webp",
          "inline_webp": null,
          "question": "In malware analysis, what role does RegRipper play in understanding the impact of malware on a system?",
          "options": {
            "A": "It decrypts encrypted files",
            "B": "It identifies the network traffic generated by malware",
            "C": "It helps in analyzing system changes and artifacts left by malware",
            "D": "It monitors CPU usage during malware execution"
          },
          "correct": [
            "C"
          ],
          "vi_question": "RegRipper đóng vai trò gì trong việc đánh giá tác động của malware lên hệ thống?",
          "vi_explanation": "C. Giúp phân tích các thay đổi hệ thống và các dấu vết (artifacts) do malware để lại.\nRegRipper trích xuất và phân tích thông tin từ Registry phục vụ điều tra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_287",
          "slide": "slide_287.png",
          "slide_webp": "slides/IAM302/slide_287.webp",
          "inline_webp": null,
          "question": "In Python, what is the primary use of the library YARA in malware analysis?",
          "options": {
            "A": "For reverse engineering malware samples",
            "B": "For automating static analysis of malware samples",
            "C": "For detecting and classifying malware based on patterns and rules",
            "D": "For analyzing malicious network traffic"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thư viện YARA trong Python được dùng để làm gì trong phân tích malware?",
          "vi_explanation": "C. Phát hiện và phân loại malware dựa trên các mẫu và quy tắc.\nYARA sử dụng các rule để nhận diện malware thông qua chuỗi và đặc điểm của tệp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_288",
          "slide": "slide_288.png",
          "slide_webp": "slides/IAM302/slide_288.webp",
          "inline_webp": null,
          "question": "In malware analysis, what is the purpose of using the Python library pefile?",
          "options": {
            "A": "For analyzing packet captures",
            "B": "For parsing and analyzing PE (Portable Executable) files",
            "C": "For generating shellcode",
            "D": "For obfuscating Python code"
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "b\nThư viện pefile trong Python được dùng để làm gì?\nB. Phân tích và đọc cấu trúc của tệp PE (Portable Executable).\npefile cho phép truy cập PE Header, Import Table, Export Table, Sections và nhiều thông tin khác.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_289",
          "slide": "slide_289.png",
          "slide_webp": "slides/IAM302/slide_289.webp",
          "inline_webp": null,
          "question": "If you're looking to detect stealthy modifications by malware to system drivers or services, what strategy would enhance visibility?",
          "options": {
            "A": "Disable antivirus",
            "B": "Reboot the machine before analysis",
            "C": "Only monitor network activity",
            "D": "Use Process Monitor with specific filters"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Nếu muốn phát hiện các thay đổi kín đáo của malware đối với driver hoặc service, chiến lược nào giúp quan sát tốt hơn?",
          "vi_explanation": "D. Sử dụng Process Monitor với các bộ lọc (filters) phù hợp.\nProcess Monitor kết hợp bộ lọc giúp tập trung vào các thao tác liên quan đến driver, service và Registry.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_290",
          "slide": "slide_290.png",
          "slide_webp": "slides/IAM302/slide_290.webp",
          "inline_webp": null,
          "question": "What is the order of namespaces in which Python looks for an identifier?",
          "options": {
            "A": "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
            "B": "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
            "C": "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
            "D": "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Thứ tự Python tìm kiếm một định danh (identifier) là gì?",
          "vi_explanation": "C. Local namespace → Global namespace → Built-in namespace.\nPython áp dụng quy tắc LEGB, trong đó với các lựa chọn này là Local → Global → Built-in.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_291",
          "slide": "slide_291.png",
          "slide_webp": "slides/IAM302/slide_291.webp",
          "inline_webp": null,
          "question": "What does this instruction do?",
          "options": {
            "A": "Puts the literal string \"ebx\" into eax",
            "B": "Puts the contents of memory pointed to by ebx into eax",
            "C": "Puts the contents of eax into ebx",
            "D": "Puts the contents of ebx into eax"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Lệnh mov eax,[ebx] thực hiện điều gì?",
          "vi_explanation": "B. Đưa nội dung của ô nhớ mà EBX trỏ tới vào EAX.\nDấu ngoặc vuông [] biểu thị truy cập bộ nhớ; dữ liệu tại địa chỉ chứa trong EBX sẽ được nạp vào EAX.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_292",
          "slide": "slide_292.png",
          "slide_webp": "slides/IAM302/slide_292.webp",
          "inline_webp": null,
          "question": "The biggest advantage of using physical machines over virtual machines for malware analysis:",
          "options": {
            "A": "Stronger isolation of the laboratory environment",
            "B": "Malware is not created to run on physical hardware",
            "C": "Reduce maintenance costs",
            "D": "Easy to replicate"
          },
          "correct": [
            "A"
          ],
          "vi_question": "Ưu điểm lớn nhất của việc sử dụng máy vật lý thay vì máy ảo để phân tích malware là gì?",
          "vi_explanation": "A. Khả năng cách ly phòng thí nghiệm tốt hơn.\nMột số malware có khả năng phát hiện máy ảo. Máy vật lý giúp tránh các kỹ thuật anti-VM và phản ánh môi trường thực tế tốt hơn.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_293",
          "slide": "slide_293.png",
          "slide_webp": "slides/IAM302/slide_293.webp",
          "inline_webp": null,
          "question": "In the event of an exception, when does the debugger receive a second chance to handle it?",
          "options": {
            "A": "Always before the application",
            "B": "Only if the program crashes",
            "C": "If the application fails to handle the exception",
            "D": "Never"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Trong trường hợp xảy ra ngoại lệ (exception), khi nào trình gỡ lỗi (debugger) nhận được cơ hội thứ hai (second chance) để xử lý?",
          "vi_explanation": "C. Nếu ứng dụng không tự xử lý được ngoại lệ (If the application fails to handle the exception).\nTrong Windows Debugging, debugger nhận first-chance exception trước. Nếu ứng dụng không xử lý được ngoại lệ, debugger sẽ nhận second-chance exception; nếu vẫn không xử lý được thì chương trình sẽ bị dừng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_294",
          "slide": "slide_294.png",
          "slide_webp": "slides/IAM302/slide_294.webp",
          "inline_webp": null,
          "question": "What is a key characteristic of malware?",
          "options": {
            "A": "It always requires user permission to execute",
            "B": "It never interacts with the operating system",
            "C": "It spreads and infects other systems",
            "D": "It cannot be detected by forensic tools"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Đặc điểm quan trọng của mã độc (malware) là gì?",
          "vi_explanation": "C. Nó có khả năng lây lan và lây nhiễm sang các hệ thống khác (It spreads and infects other systems).\nNhiều loại malware có khả năng tự sao chép hoặc lây lan sang các tệp, thiết bị hoặc máy tính khác để mở rộng phạm vi tấn công.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_295",
          "slide": "slide_295.png",
          "slide_webp": "slides/IAM302/slide_295.webp",
          "inline_webp": null,
          "question": "What role does documentation play in effective malware analysis?",
          "options": {
            "A": "Documenting every step of the analysis process is unnecessary",
            "B": "Detailed documentation helps in reproducing results and sharing findings",
            "C": "Documentation is primarily useful for academic research purposes",
            "D": "Keeping analysis methods secret is more important than documentation"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Tài liệu hóa (documentation) đóng vai trò gì trong việc phân tích mã độc hiệu quả?",
          "vi_explanation": "B. Việc ghi chép chi tiết giúp tái tạo kết quả và chia sẻ các phát hiện (Detailed documentation helps in reproducing results and sharing findings).\nTài liệu hóa đầy đủ giúp các nhà phân tích khác có thể kiểm chứng, tái hiện quá trình phân tích và hỗ trợ điều tra hoặc xử lý sự cố sau này.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_296",
          "slide": "slide_296.png",
          "slide_webp": "slides/IAM302/slide_296.webp",
          "inline_webp": null,
          "question": "What is a critical aspect of setting up a malware analysis lab?",
          "options": {
            "A": "Connecting it to a production environment",
            "B": "Ensuring it's isolated and inexpensive",
            "C": "Using only open-source tools",
            "D": "Running malware in an unsecured network"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Yếu tố quan trọng khi thiết lập phòng thí nghiệm phân tích mã độc (malware analysis lab) là gì?",
          "vi_explanation": "B. Đảm bảo môi trường được cách ly và có chi phí hợp lý (Ensuring it's isolated and inexpensive).\nPhòng thí nghiệm phải được cách ly khỏi mạng và hệ thống thật để tránh mã độc lây lan hoặc gây ảnh hưởng đến môi trường sản xuất.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_297",
          "slide": "slide_297.png",
          "slide_webp": "slides/IAM302/slide_297.webp",
          "inline_webp": null,
          "question": "What is a key advantage of Python's design that makes it suitable for malware analysis tools, as mentioned in the document?",
          "options": {
            "A": "It executes faster than compiled languages like C++",
            "B": "It reduces code size significantly compared to C++ or Java",
            "C": "It is restricted to Windows platforms only",
            "D": "It lacks support for object-oriented programming"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Ưu điểm trong thiết kế của Python khiến nó phù hợp để phát triển các công cụ phân tích mã độc là gì?",
          "vi_explanation": "B. Giúp giảm đáng kể lượng mã nguồn so với C++ hoặc Java (It reduces code size significantly compared to C++ or Java).\nPython có cú pháp ngắn gọn, thư viện phong phú và hỗ trợ phát triển nhanh, giúp xây dựng các công cụ phân tích malware hiệu quả.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_298",
          "slide": "slide_298.png",
          "slide_webp": "slides/IAM302/slide_298.webp",
          "inline_webp": null,
          "question": "What advantage does using VirtualBox disk images (VDIs) provide over physical snapshots?",
          "options": {
            "A": "It ensures stronger isolation from the host system",
            "B": "It reduces the need for network routing",
            "C": "It eliminates the need for forensic tools",
            "D": "It allows multiple reversible snapshots for experimentation"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Ưu điểm của việc sử dụng ảnh đĩa VirtualBox (VDI) so với snapshot trên máy vật lý là gì?",
          "vi_explanation": "D. Cho phép tạo nhiều snapshot có thể hoàn tác để thử nghiệm (It allows multiple reversible snapshots for experimentation).\nSnapshot của VirtualBox cho phép dễ dàng quay lại trạng thái trước đó sau mỗi lần chạy malware, rất hữu ích trong quá trình phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_299",
          "slide": "slide_299.png",
          "slide_webp": "slides/IAM302/slide_299.webp",
          "inline_webp": null,
          "question": "What does \"single-stepping\" mean in debugging?",
          "options": {
            "A": "Running malware from Safe Mode",
            "B": "Decrypting malware payload",
            "C": "Executing one instruction at a time",
            "D": "Skipping functions for speed"
          },
          "correct": [
            "C"
          ],
          "vi_question": "\"Single-stepping\" trong gỡ lỗi (debugging) có nghĩa là gì?",
          "vi_explanation": "C. Thực thi từng lệnh một (Executing one instruction at a time).\nSingle-stepping giúp nhà phân tích quan sát chính xác hành vi của chương trình ở từng câu lệnh hoặc từng lệnh máy.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_300",
          "slide": "slide_300.png",
          "slide_webp": "slides/IAM302/slide_300.webp",
          "inline_webp": null,
          "question": "What should a malware analysis report include regarding the specimen's characteristics?",
          "options": {
            "A": "The malware author's identity",
            "B": "A list of all programming languages used",
            "C": "The specimen's infection, self-preservation, and spreading capabilities",
            "D": "The estimated financial damage caused"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Báo cáo phân tích mã độc nên bao gồm nội dung gì về đặc điểm của mẫu mã độc?",
          "vi_explanation": "C. Khả năng lây nhiễm, tự bảo vệ và phát tán của mẫu mã độc (The specimen's infection, self-preservation, and spreading capabilities).\nĐây là những đặc điểm cốt lõi giúp đánh giá mức độ nguy hiểm của malware và hỗ trợ xây dựng biện pháp phòng chống phù hợp.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_301",
          "slide": "slide_301.png",
          "slide_webp": "slides/IAM302/slide_301.webp",
          "inline_webp": null,
          "question": "What is a key characteristic of targeted malware, such as Stuxnet?",
          "options": {
            "A": "Infects as many machines as possible",
            "B": "Tailored to a specific target and difficult to detect",
            "C": "Sends spam emails from infected machines",
            "D": "Records keystrokes on the infected system"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Đặc điểm chính của targeted malware (mã độc có chủ đích), chẳng hạn như Stuxnet, là gì?",
          "vi_explanation": "B. Tailored to a specific target and difficult to detect\n→ Được thiết kế riêng để nhắm vào một mục tiêu cụ thể và khó bị phát hiện.\nTargeted malware thường được phát triển để tấn công một tổ chức, hệ thống hoặc môi trường cụ thể, thay vì cố gắng lây nhiễm càng nhiều máy càng tốt.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_302",
          "slide": "slide_302.png",
          "slide_webp": "slides/IAM302/slide_302.webp",
          "inline_webp": null,
          "question": "What is a container-based sandbox?",
          "options": {
            "A": "A sandbox that uses physical barriers to isolate malware",
            "B": "A sandbox that uses virtualization technology to create isolated environments",
            "C": "A sandbox that relies on network traffic analysis to detect threats",
            "D": "A sandbox that stores malware samples in a secure database"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Container-based sandbox là gì?",
          "vi_explanation": "B. A sandbox that uses virtualization technology to create isolated environments\n→ Một sandbox sử dụng công nghệ ảo hóa để tạo ra các môi trường cô lập.\nContainer-based sandbox cô lập ứng dụng hoặc mã cần phân tích trong môi trường riêng biệt, giúp hạn chế ảnh hưởng của mã độc tới hệ thống chính. Trong các lựa chọn đã cho,",
          "has_visual": false
        }
      ]
    },
    {
      "id": "iam_long",
      "title": "Câu dài (Chính sách & Tình huống)",
      "tag": "Câu dài",
      "slide_range": "Slide 304 - 322",
      "questions": [
        {
          "id": "IAM302_slide_304",
          "slide": "slide_304.png",
          "slide_webp": "slides/IAM302/slide_304.webp",
          "inline_webp": null,
          "question": "What is the main characteristic of a rootkit?",
          "options": {
            "A": "It displays unwanted advertisements",
            "B": "It encrypts files and demands ransom",
            "C": "It provides remote access to a compromised system",
            "D": "It hides its presence on a system and grants unauthorized access"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Đặc điểm chính của rootkit là gì?",
          "vi_explanation": "D. Che giấu sự hiện diện của nó trên hệ thống và cấp quyền truy cập trái phép.\nRootkit được thiết kế để ẩn malware hoặc kẻ tấn công khỏi hệ điều hành, đồng thời duy trì quyền truy cập trái phép với đặc quyền cao.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_305",
          "slide": "slide_305.png",
          "slide_webp": "slides/IAM302/slide_305.webp",
          "inline_webp": null,
          "question": "What is the primary advantage of ClamAV in malware classification?",
          "options": {
            "A": "It only detects malware based on behavioral analysis",
            "B": "It utilizes multiple detection databases, including MD5 hashes and PE metadata",
            "C": "It requires constant manual updates to function effectively",
            "D": "It is designed exclusively for detecting phishing attempts"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Ưu điểm chính của ClamAV trong việc phân loại malware là gì?",
          "vi_explanation": "B. Sử dụng nhiều cơ sở dữ liệu phát hiện, bao gồm MD5 hash và PE metadata.\nClamAV sử dụng nhiều loại chữ ký như MD5 hash, PE metadata và các signature khác để nhận diện malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_306",
          "slide": "slide_306.png",
          "slide_webp": "slides/IAM302/slide_306.webp",
          "inline_webp": null,
          "question": "What is the purpose of the sandbox?",
          "options": {
            "A": "To stop all BYOD network traffic",
            "B": "To flag and pass the known exploit to the endpoint to handle",
            "C": "To observe the activity of unknown code in a quarantined environment",
            "D": "To run vulnerability scans on all network endpoints"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục đích của sandbox là gì?",
          "vi_explanation": "C. Quan sát hoạt động của mã chưa xác định trong môi trường cách ly.\nSandbox cho phép chạy malware trong môi trường cô lập để phân tích hành vi mà không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_307",
          "slide": "slide_307.png",
          "slide_webp": "slides/IAM302/slide_307.webp",
          "inline_webp": null,
          "question": "What is the benefit of using a sandbox in malware analysis?",
          "options": {
            "A": "It permanently removes malware from the system",
            "B": "It allows researchers to observe malware behavior without risking system damage",
            "C": "It increases the speed of malware propagation",
            "D": "It automatically updates antivirus definitions"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Lợi ích của việc sử dụng sandbox trong phân tích malware là gì?",
          "vi_explanation": "B. Cho phép nhà nghiên cứu quan sát hành vi của malware mà không gây hư hại hệ thống.\nSandbox giúp thực thi malware an toàn trong môi trường được kiểm soát.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_308",
          "slide": "slide_308.png",
          "slide_webp": "slides/IAM302/slide_308.webp",
          "inline_webp": null,
          "question": "What is a key feature that distinguishes sandbox analysis from traditional static malware analysis?",
          "options": {
            "A": "It disassembles the malware binary to examine its code",
            "B": "It executes the malware in a controlled environment to observe behavior",
            "C": "It relies solely on signature-based detection",
            "D": "It analyzes malware without running it"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Đặc điểm nào phân biệt phân tích bằng sandbox với phân tích malware tĩnh (static analysis)?",
          "vi_explanation": "B. Thực thi malware trong môi trường được kiểm soát để quan sát hành vi.\nSandbox thuộc phân tích động (dynamic analysis), còn static analysis không chạy malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_309",
          "slide": "slide_309.png",
          "slide_webp": "slides/IAM302/slide_309.webp",
          "inline_webp": null,
          "question": "What is the primary aim of incorporating both behavioral analysis and code analysis in malware analysis?",
          "options": {
            "A": "To confuse malware creators",
            "B": "To make the analysis process longer",
            "C": "To provide a comprehensive understanding of malware behavior and inner workings",
            "D": "To increase the chance of malware spreading"
          },
          "correct": [
            "C"
          ],
          "vi_question": "Mục tiêu chính của việc kết hợp phân tích hành vi và phân tích mã trong malware analysis là gì?",
          "vi_explanation": "C. Cung cấp sự hiểu biết toàn diện về hành vi và cách hoạt động bên trong của malware.\nKết hợp static và dynamic analysis giúp hiểu cả cách malware hoạt động lẫn cấu trúc mã của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_310",
          "slide": "slide_310.png",
          "slide_webp": "slides/IAM302/slide_310.webp",
          "inline_webp": null,
          "question": "What is the primary difference between kernel-mode and user-mode debugging?",
          "options": {
            "A": "Kernel-mode debugging requires physical access to the system, while user-mode debugging does not.",
            "B": "Kernel-mode debugging allows access to system-level processes and resources, while user-mode debugging is limited to user applications.",
            "C": "User-mode debugging is more secure than kernel-mode debugging.",
            "D": "Kernel-mode debugging is only applicable to Windows systems, while user-mode debugging is applicable to all operating systems."
          },
          "correct": [
            "B"
          ],
          "vi_question": "Khác biệt chính giữa kernel-mode debugging và user-mode debugging là gì?",
          "vi_explanation": "B. Kernel-mode debugging cho phép truy cập các tiến trình và tài nguyên mức hệ thống, còn user-mode debugging chỉ giới hạn ở các ứng dụng người dùng.\nKernel debugger có thể phân tích driver và kernel, trong khi user-mode debugger chỉ làm việc với tiến trình thông thường.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_311",
          "slide": "slide_311.png",
          "slide_webp": "slides/IAM302/slide_311.webp",
          "inline_webp": null,
          "question": "What is the benefit of using a sandbox in malware analysis?",
          "options": {
            "A": "It permanently removes malware from the system",
            "B": "It allows researchers to observe malware behavior without risking system damage",
            "C": "Itincreases the speed of malware propagation",
            "D": "It automatically updates antivirus definitions"
          },
          "correct": [
            "B"
          ],
          "vi_question": "Lợi ích của việc sử dụng sandbox trong phân tích malware là gì?",
          "vi_explanation": "B. Cho phép nhà nghiên cứu quan sát hành vi của malware mà không gây hư hại hệ thống.\nĐây là ưu điểm lớn nhất của sandbox khi phân tích malware.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_312",
          "slide": "slide_312.png",
          "slide_webp": "slides/IAM302/slide_312.webp",
          "inline_webp": null,
          "question": "What is a limitation of sandbox technology?",
          "options": {
            "A": "It is ineffective against known malware",
            "B": "It cannot analyze executable files",
            "C": "It requires significant computational resources",
            "D": "It may fail to detect advanced malware that is specifically designed to evade sandbox detection"
          },
          "correct": [
            "D"
          ],
          "vi_question": "Một hạn chế của công nghệ sandbox là gì?",
          "vi_explanation": "D. Có thể không phát hiện được malware nâng cao được thiết kế để né tránh sandbox.\nNhiều malware hiện đại có kỹ thuật anti-VM và anti-sandbox nên sẽ thay đổi hành vi hoặc không hoạt động khi phát hiện môi trường phân tích.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_313",
          "slide": "slide_313.png",
          "slide_webp": "slides/IAM302/slide_313.webp",
          "inline_webp": null,
          "question": "What differentiates a worm from a virus?",
          "options": {
            "A": "Worms require user interaction to spread, while viruses can spread autonomously.",
            "B": "Viruses infect files, while worms can spread independently through networks.",
            "C": "Worms primarily target system files, while viruses target user data.",
            "D": "Viruses can only spread through email, while worms can spread through multiple vectors."
          },
          "correct": [
            "B"
          ],
          "vi_question": "Điểm khác biệt giữa worm và virus là gì?",
          "vi_explanation": "B. Virus lây nhiễm vào tệp, còn worm có thể tự lây lan độc lập qua mạng.\nVirus cần gắn vào tệp hoặc chương trình, trong khi worm tự sao chép và lây lan mà không cần tệp chủ.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_314",
          "slide": "slide_314.png",
          "slide_webp": "slides/IAM302/slide_314.webp",
          "inline_webp": null,
          "question": "What makes a logic bomb distinct from other malware?",
          "options": {
            "A": "Logic bombs are activated by specific conditions or triggers, while other malware operates continuously.",
            "B": "Logic bombs primarily target hardware components, while other malware targets software.",
            "C": "Logic bombs disguise themselves as legitimate software, while other malware uses deceptive tactics.",
            "D": "Logic bombs encrypt files and demand ransom for decryption, while other malware steal sensitive information."
          },
          "correct": [
            "A"
          ],
          "vi_question": "Điều gì làm logic bomb khác với các loại malware khác?",
          "vi_explanation": "A. Logic bomb chỉ được kích hoạt khi một điều kiện hoặc sự kiện cụ thể xảy ra.\nLogic bomb \"ngủ yên\" cho đến khi điều kiện kích hoạt được đáp ứng.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_315",
          "slide": "slide_315.png",
          "slide_webp": "slides/IAM302/slide_315.webp",
          "inline_webp": null,
          "question": "Which of the following best describes how a sandbox works?",
          "options": {
            "A": "It isolates and analyzes suspicious files or programs in a controlled environment.",
            "B": "It scans computer networks for vulnerabilities.",
            "C": "It encrypts sensitive data to prevent unauthorized access.",
            "D": "It monitors internet traffic for malicious activity."
          },
          "correct": [
            "A"
          ],
          "vi_question": "Mô tả nào đúng nhất về cách sandbox hoạt động?",
          "vi_explanation": "A. Cô lập và phân tích các tệp hoặc chương trình đáng ngờ trong môi trường được kiểm soát.\nSandbox ngăn malware ảnh hưởng đến hệ thống thật trong khi vẫn cho phép quan sát hành vi của nó.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_316",
          "slide": "slide_316.png",
          "slide_webp": "slides/IAM302/slide_316.webp",
          "inline_webp": null,
          "question": "How does the reporting module contribute to sandbox architecture?",
          "options": {
            "A": "It analyzes malware behavior and generates detailed reports for analysis.",
            "B": "It encrypts sensitive data to prevent unauthorized access.",
            "C": "It provides internet connectivity to the sandbox environment.",
            "D": "It stores sandbox activity logs for future reference."
          },
          "correct": [
            "A"
          ],
          "vi_question": "Module báo cáo (reporting module) đóng góp gì trong kiến trúc sandbox?",
          "vi_explanation": "A. Phân tích hành vi malware và tạo các báo cáo chi tiết phục vụ phân tích.\nReporting module tổng hợp kết quả quan sát thành báo cáo để phục vụ điều tra.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_317",
          "slide": "slide_317.png",
          "slide_webp": "slides/IAM302/slide_317.webp",
          "inline_webp": null,
          "question": "How does a rootkit differ from other types of malware?",
          "options": {
            "A": "Rootkits are only effective on Windows operating systems, while other malware types target multiple platforms.",
            "B": "Rootkits modify system files to grant unauthorized access, while other malware types focus on data theft or disruption.",
            "C": "Rootkits spread through email attachments, while other malware types exploit software vulnerabilities.",
            "D": "Rootkits require physical access to a computer, while other malware types can infect remotely."
          },
          "correct": [
            "B"
          ],
          "vi_question": "Rootkit khác các loại malware khác như thế nào?",
          "vi_explanation": "B. Rootkit sửa đổi hệ thống để cấp quyền truy cập trái phép, trong khi các malware khác chủ yếu đánh cắp dữ liệu hoặc phá hoại.\nĐiểm nổi bật của rootkit là khả năng ẩn mình và duy trì quyền truy cập với đặc quyền cao.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_318",
          "slide": "slide_318.png",
          "slide_webp": "slides/IAM302/slide_318.webp",
          "inline_webp": null,
          "question": "A researcher wants to test a new trojan sample. Which environment setup provides the safest and most flexible analysis?",
          "options": {
            "A": "Install it on their host Windows system.",
            "B": "Use an online sandbox and share results publicly.",
            "C": "Install it on a public-facing web server.",
            "D": "Deploy the sample in a custom virtual machine with snapshot capabilities."
          },
          "correct": [
            "D"
          ],
          "vi_question": "Một nhà nghiên cứu muốn thử nghiệm một mẫu trojan mới. Môi trường nào an toàn và linh hoạt nhất?",
          "vi_explanation": "D. Triển khai mẫu trong một máy ảo tùy chỉnh có khả năng tạo snapshot.\nMáy ảo với snapshot cho phép dễ dàng khôi phục về trạng thái ban đầu sau mỗi lần thử nghiệm.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_319",
          "slide": "slide_319.png",
          "slide_webp": "slides/IAM302/slide_319.webp",
          "inline_webp": null,
          "question": "perl rip.pl -r /mnt/forensics/WINDOWS/system32/config/software -p product",
          "options": {
            "A": "To get information about the Operating System installed on this computer.",
            "B": "To get information about all programs installed on this computer.",
            "C": "To get information about all users on this computer.",
            "D": "To get information about output devices."
          },
          "correct": [
            "B"
          ],
          "vi_question": "",
          "vi_explanation": "Giải thích: Plugin product của RegRipper đọc SOFTWARE hive để lấy thông tin các chương trình đã cài đặt.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_320",
          "slide": "slide_320.png",
          "slide_webp": "slides/IAM302/slide_320.webp",
          "inline_webp": null,
          "question": "Within the computer security context, what is a sandbox?",
          "options": {
            "A": "An isolated virtual environment to test suspicious files and hyperlinks.",
            "B": "A process used to identify, describe, and categorize malware.",
            "C": "A service in the Cloud used to collect and share threat intelligence.",
            "D": "A segment of the network reserved for testing unknown programs."
          },
          "correct": [
            "A"
          ],
          "vi_question": "Trong lĩnh vực an toàn thông tin, sandbox là gì?",
          "vi_explanation": "A. Một môi trường ảo cách ly để kiểm tra các tệp và liên kết đáng ngờ.\nSandbox là môi trường thực thi an toàn giúp phân tích malware hoặc các tệp nghi ngờ mà không ảnh hưởng đến hệ thống thật.",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_321",
          "slide": "slide_321.png",
          "slide_webp": "slides/IAM302/slide_321.webp",
          "inline_webp": null,
          "question": "What is a key difference between the Raw Dump format and the Windows crash dump format for memory captures?",
          "options": {
            "A": "Raw Dump is linear, while Windows crash dump includes system state metadata",
            "B": "Raw Dump is compressed, while Windows crash dump is not",
            "C": "Raw Dump requires commercial tools, while Windows crash dump does not",
            "D": "Windows crash dump is only for kernel memory, while Raw Dump is for user memory"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        },
        {
          "id": "IAM302_slide_322",
          "slide": "slide_322.png",
          "slide_webp": "slides/IAM302/slide_322.webp",
          "inline_webp": null,
          "question": "What is the key distinction between a launcher and a downloader malware?",
          "options": {
            "A": "A launcher executes other malicious programs stealthily, while a downloader primarily retrieves and installs additional malware",
            "B": "A launcher is always visible in the system process list, whereas a downloader remains hidden",
            "C": "A launcher only functions in Windows systems, while a downloader affects all platforms",
            "D": "A launcher requires a network connection, whereas a downloader operates offline"
          },
          "correct": [
            "A"
          ],
          "vi_question": "",
          "vi_explanation": "",
          "has_visual": false
        }
      ]
    }
  ]
};
