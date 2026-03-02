const RAW_ROADMAP_TEXT = `1. Web Application Penetration Tester
Skills Needed: Manual testing methodology, Web protocol mastery, Business logic analysis
Projects: Full audit of an open source web app, Build and exploit a deliberately vulnerable lab
Books/Courses: The Web Application Hacker's Handbook, PortSwigger Web Security Academy

2. API Security Engineer
Skills Needed: API authentication models, Token security analysis, API fuzzing
Projects: Design and break a REST API with flawed auth, Conduct an API security review
Books/Courses: API Security in Action, OWASP API Security Top 10 Guide

3. Mobile App Security Auditor
Skills Needed: Static analysis, Dynamic instrumentation, Mobile OS internals
Projects: Reverse engineer an Android app, Bypass certificate pinning in a test app
Books/Courses: Android Hacker's Handbook, Mobile Security Testing Guide

4. Cloud Security Engineer (IaaS)
Skills Needed: IAM architecture, Cloud networking, Infrastructure hardening
Projects: Secure a misconfigured AWS lab, Design least privilege IAM policies
Books/Courses: AWS Security Specialty Course, Cloud Security and Privacy

5. Cloud Security Engineer (Kubernetes)
Skills Needed: Kubernetes RBAC, Container isolation, Cluster hardening
Projects: Deploy and secure a Kubernetes cluster, Detect container escape scenarios
Books/Courses: Kubernetes Security, Certified Kubernetes Security Specialist Prep

6. Container Runtime Security Specialist
Skills Needed: Linux namespaces, Runtime monitoring, Container escape detection
Projects: Build runtime alerts with Falco, Simulate container breakout
Books/Courses: Container Security by Liz Rice, Linux Hardening Guide

7. Infrastructure Penetration Tester
Skills Needed: Active Directory attacks, Network exploitation, Privilege escalation
Projects: Full red team lab engagement, Domain takeover simulation
Books/Courses: Penetration Testing by Georgia Weidman, CRTP Course

8. Network Defense Engineer
Skills Needed: Firewall configuration, IDS tuning, Packet analysis
Projects: Build and monitor a segmented home lab, Write custom IDS rules
Books/Courses: Network Security Essentials, Practical Packet Analysis

9. SOC Analyst
Skills Needed: Log analysis, Alert triage, Incident documentation
Projects: Simulate attack logs and triage them, Write investigation reports
Books/Courses: Blue Team Field Manual, SOC Analyst Path by LetsDefend

10. SOC Engineer
Skills Needed: SIEM engineering, Detection rule creation, Log pipeline management
Projects: Deploy ELK stack, Create custom Sigma detection rules
Books/Courses: Practical SIEM Engineering, Elastic Security Training

11. Incident Response Investigator
Skills Needed: Incident lifecycle management, Evidence handling, Threat containment
Projects: Ransomware response simulation, Full incident timeline reconstruction
Books/Courses: Incident Response and Computer Forensics, SANS IR Course

12. Threat Hunter
Skills Needed: MITRE ATT&CK mapping, Hypothesis-driven analysis, Behavioral detection
Projects: Develop 5 proactive hunt queries, Threat hunt case study report
Books/Courses: Threat Hunting by O'Reilly, MITRE ATT&CK Defender Training

13. Digital Forensics Analyst
Skills Needed: File system forensics, Artifact recovery, Chain of custody
Projects: Analyze disk image, Extract browser and registry artifacts
Books/Courses: Guide to Computer Forensics and Investigations, Autopsy Training

14. Memory Forensics Researcher
Skills Needed: Volatile memory analysis, Process injection detection, Kernel artifacts
Projects: Analyze memory dump for malware traces, Research memory evasion tactics
Books/Courses: The Art of Memory Forensics, Volatility Foundation Training

15. Malware Analyst
Skills Needed: Static analysis, Dynamic sandboxing, Windows internals
Projects: Analyze multiple malware families, Write behavioral reports
Books/Courses: Practical Malware Analysis, Malware Unicorn Training

16. Reverse Engineer
Skills Needed: Assembly language, Debugging, Binary analysis
Projects: Solve crackme challenges, Reverse engineer closed-source binary
Books/Courses: Reversing by Eldad Eilam, OpenSecurityTraining2

17. Exploit Developer
Skills Needed: Memory corruption exploitation, ROP chains, Shellcode development
Projects: Develop buffer overflow exploit, Write custom payload
Books/Courses: Hacking: The Art of Exploitation, Corelan Exploit Development

18. Vulnerability Researcher
Skills Needed: Fuzzing, Crash triage, Code auditing
Projects: Build a fuzzer, Discover and responsibly disclose a vulnerability
Books/Courses: Fuzzing for Software Security, Offensive Security Research Course

19. Fuzzing Engineer
Skills Needed: Coverage-guided fuzzing, Automation scripting, Crash analysis
Projects: Integrate AFL or libFuzzer into open source project, Analyze unique crashes
Books/Courses: The Fuzzing Book, Google OSS-Fuzz Documentation

20. Vulnerability Coordination Lead
Skills Needed: CVE process management, Disclosure communication, Risk assessment
Projects: Coordinate responsible disclosure case, Draft public advisory
Books/Courses: CERT Coordination Training, ISO 29147 Standard Guide

21. Ransomware Analyst
Skills Needed: Ransomware behavior analysis, Encryption flow understanding, Threat intelligence correlation
Projects: Analyze a ransomware sample in lab, Map a ransomware family to MITRE ATT&CK
Books/Courses: Practical Malware Analysis, Ransomware Deep Dive Courses

22. Threat Intelligence Analyst
Skills Needed: Adversary profiling, OSINT collection, Report writing
Projects: Build threat profile of one APT group, Publish structured intel brief
Books/Courses: Intelligence-Driven Incident Response, SANS Threat Intelligence

23. OSINT Investigator
Skills Needed: Open source research techniques, Data correlation, Verification methods
Projects: Investigate a simulated persona using public data, Document digital footprint mapping
Books/Courses: Open Source Intelligence Techniques, Bellingcat Workshops

24. Cybercrime Investigator
Skills Needed: Digital evidence analysis, Case documentation, Legal procedure awareness
Projects: Simulated online fraud case reconstruction, Evidence handling documentation
Books/Courses: Cybercrime and Digital Forensics, Law Enforcement Cyber Training

25. Red Team Operator
Skills Needed: Adversary emulation, Lateral movement, Operational security
Projects: Full red team engagement in lab, Command and control infrastructure setup
Books/Courses: Red Team Field Manual, CRTO Course

26. Purple Team Facilitator
Skills Needed: Cross-team communication, Detection validation, Attack simulation
Projects: Run red vs blue simulation, Map findings to detection improvements
Books/Courses: Purple Teaming Guide, MITRE ATT&CK Workshops

27. Adversary Emulation Engineer
Skills Needed: Scenario design, Infrastructure scripting, Threat replication
Projects: Recreate real-world attack chain, Develop reusable emulation playbook
Books/Courses: Adversary Emulation with MITRE ATT&CK, Red Team Infrastructure Guides

28. Social Engineering Specialist
Skills Needed: Psychological profiling, Persuasion tactics, Pretext design
Projects: Simulated phishing campaign, Physical pretext engagement lab
Books/Courses: Social Engineering by Christopher Hadnagy, SANS SEC487

29. Physical Security Penetration Tester
Skills Needed: Lock bypass basics, Surveillance evasion, Report documentation
Projects: Conduct physical entry simulation, Evaluate badge system weaknesses
Books/Courses: Physical Security Professional Guide, Red Team Physical Security Training

30. Security Automation Engineer
Skills Needed: Scripting, SOAR workflow design, API integration
Projects: Automate phishing triage, Build incident response playbook automation
Books/Courses: Automating Security Operations, Python for Security

31. SOAR Playbook Developer
Skills Needed: Workflow logic design, Integration mapping, Incident orchestration
Projects: Create multi-step response playbook, Integrate SIEM with SOAR
Books/Courses: SOAR Implementation Guide, Vendor SOAR Training

32. EDR Tuning Specialist
Skills Needed: Endpoint telemetry analysis, Detection tuning, False positive reduction
Projects: Tune EDR alerts in lab, Create detection improvement report
Books/Courses: Endpoint Detection and Response Guide, Blue Team Labs

33. Endpoint Security Engineer
Skills Needed: OS hardening, Patch strategy, Endpoint policy enforcement
Projects: Harden Windows and Linux endpoints, Deploy endpoint monitoring
Books/Courses: Windows Internals, Linux Hardening Guide

34. Application Security Engineer
Skills Needed: Secure SDLC, Code review, Threat modeling
Projects: Perform code review on open source app, Conduct threat modeling session
Books/Courses: Threat Modeling by Adam Shostack, OWASP Secure Coding

35. Secure Code Auditor
Skills Needed: Static analysis, Manual code inspection, Vulnerability classification
Projects: Audit GitHub project, Produce vulnerability report
Books/Courses: Secure Coding in C and C++, Code Review Guidelines

36. Security Architect
Skills Needed: System design, Risk modeling, Security framework knowledge
Projects: Design secure enterprise architecture, Present architecture defense model
Books/Courses: SABSA Foundation Guide, Security Engineering by Ross Anderson

37. Identity and Access Management Engineer
Skills Needed: SSO architecture, OAuth and SAML, Access lifecycle management
Projects: Implement SSO in lab, Configure RBAC policies
Books/Courses: OAuth 2 Simplified, IAM Professional Training

38. Privileged Access Management Specialist
Skills Needed: Account vaulting, Privilege escalation prevention, Session monitoring
Projects: Deploy PAM solution in lab, Audit privileged account usage
Books/Courses: PAM Implementation Guide, Enterprise Identity Security

39. PKI and Cryptography Engineer
Skills Needed: Certificate lifecycle management, TLS configuration, Key management
Projects: Build internal CA, Deploy secure TLS environment
Books/Courses: Applied Cryptography, Practical TLS Guide

40. Cryptanalysis Researcher
Skills Needed: Mathematical foundations, Algorithm analysis, Cryptographic attack modeling
Projects: Analyze weakness in simplified cipher, Implement attack simulation
Books/Courses: Understanding Cryptography, Introduction to Modern Cryptography

41. Privacy Engineer
Skills Needed: Data minimization design, Privacy by design principles, Data flow mapping
Projects: Map data lifecycle of a web app, Redesign system to reduce data exposure
Books/Courses: Engineering Privacy by Design, IAPP Privacy Engineering Course

42. Data Protection Officer
Skills Needed: Regulatory knowledge (GDPR and equivalents), Risk assessment, Policy drafting
Projects: Draft data protection impact assessment, Build internal privacy policy framework
Books/Courses: European Data Protection Law, CIPP Certification Prep

43. Governance Risk and Compliance Analyst
Skills Needed: Control mapping, Risk analysis, Audit preparation
Projects: Map controls to ISO 27001, Conduct mock internal audit
Books/Courses: ISO 27001 Lead Implementer Guide, GRC Professional Training

44. Penetration Test Manager
Skills Needed: Engagement scoping, Team leadership, Executive reporting
Projects: Lead simulated pentest project, Present board-level summary report
Books/Courses: Managing Cybersecurity Programs, Offensive Security Management Training

45. Security Program Manager
Skills Needed: Roadmap planning, Stakeholder coordination, Budget management
Projects: Design 12 month security roadmap, Define security KPIs
Books/Courses: CISSP Official Study Guide, Security Program Management Course

46. CISO Advisor
Skills Needed: Risk communication, Business alignment, Regulatory strategy
Projects: Develop enterprise security strategy document, Conduct executive risk workshop
Books/Courses: The CISO Desk Reference Guide, Harvard Cybersecurity Executive Program

47. Security Product Manager
Skills Needed: Product lifecycle management, Threat landscape awareness, Market research
Projects: Design security product roadmap, Write product requirement document
Books/Courses: Inspired by Marty Cagan, Product Security Engineering

48. Security Sales Engineer
Skills Needed: Technical pre-sales communication, Solution architecture explanation, Client requirement analysis
Projects: Deliver simulated product demo, Build proof of concept for client scenario
Books/Courses: Mastering Technical Sales, Vendor Security Engineer Training

49. Security Awareness Trainer
Skills Needed: Instructional design, Behavioral psychology basics, Communication skills
Projects: Develop phishing awareness module, Run live security workshop
Books/Courses: Security Awareness Fundamentals, Instructional Design Basics

50. Phishing Simulation Operator
Skills Needed: Email campaign design, Social engineering tactics, Metrics analysis
Projects: Build phishing simulation campaign, Measure user susceptibility and report
Books/Courses: Social Engineering by Christopher Hadnagy, Phishing Simulation Platforms Training

51. Vendor Risk Manager
Skills Needed: Third-party risk assessment, Contract review basics, Control evaluation
Projects: Perform full vendor security review, Create third-party risk scoring model
Books/Courses: Third-Party Risk Management Guide, Shared Assessments Training

52. Supply Chain Security Analyst
Skills Needed: SBOM analysis, Dependency risk mapping, Software integrity validation
Projects: Generate SBOM for sample project, Identify vulnerable dependencies
Books/Courses: Software Supply Chain Security, SLSA Framework Documentation

53. CI/CD Security Engineer
Skills Needed: Pipeline hardening, Secret management, Build security testing
Projects: Secure a GitHub Actions pipeline, Integrate SAST and DAST into CI
Books/Courses: DevSecOps Handbook, Secure CI/CD Implementation Guide

54. Secrets Management Specialist
Skills Needed: Vault configuration, Key rotation strategy, Access policy design
Projects: Deploy HashiCorp Vault lab, Implement automated key rotation
Books/Courses: Vault Documentation, Practical Cloud Security

55. Secure Build Engineer
Skills Needed: Reproducible builds, Artifact signing, Build integrity validation
Projects: Implement signed builds for sample project, Validate build reproducibility
Books/Courses: Supply Chain Security Whitepapers, Secure Software Development

56. Software Composition Analysis Analyst
Skills Needed: Dependency scanning, Vulnerability triage, Patch prioritization
Projects: Audit open source project dependencies, Create remediation roadmap
Books/Courses: OWASP Dependency Check Guide, Secure Coding Practices

57. DevSecOps Engineer
Skills Needed: Infrastructure as Code security, Automation scripting, Security testing integration
Projects: Deploy secure cloud stack via Terraform, Integrate security scans into pipeline
Books/Courses: DevSecOps Handbook, Kubernetes Security Guide

58. Site Reliability Security Engineer
Skills Needed: Reliability engineering principles, Monitoring strategy, Incident prevention
Projects: Implement secure monitoring alerts, Improve system resilience design
Books/Courses: Site Reliability Engineering by Google, Cloud Reliability Engineering

59. Observability Security Engineer
Skills Needed: Telemetry architecture, Log integrity validation, Threat detection analytics
Projects: Build centralized logging system, Detect anomaly through metrics analysis
Books/Courses: Observability Engineering, Elastic Security Training

60. PCI Compliance Specialist
Skills Needed: PCI DSS standards knowledge, Audit coordination, Control documentation
Projects: Conduct PCI gap analysis, Draft compliance remediation plan
Books/Courses: PCI DSS Quick Guide, PCI ISA Training

61. Financial Services Security Architect
Skills Needed: Financial regulatory awareness, Secure transaction design, Fraud prevention strategy
Projects: Design secure online banking architecture, Implement fraud detection controls
Books/Courses: Financial Cybersecurity Guide, CISSP Study Guide

62. Blockchain Security Auditor
Skills Needed: Smart contract auditing, Blockchain consensus understanding, Code vulnerability analysis
Projects: Audit Solidity contract, Identify reentrancy and logic flaws
Books/Courses: Mastering Ethereum, Smart Contract Security Course

63. Smart Contract Auditor
Skills Needed: Solidity programming, DeFi protocol analysis, Economic attack modeling
Projects: Audit DeFi protocol contract, Simulate flash loan exploit
Books/Courses: Ethereum Developer Course, DeFi Security Research Papers

64. Cryptoasset Security Specialist
Skills Needed: Key custody architecture, Wallet security, Multi-signature configuration
Projects: Design secure cold storage system, Simulate key compromise scenario
Books/Courses: Mastering Bitcoin, Crypto Custody Security Guides

65. DeFi Security Researcher
Skills Needed: Protocol economics, Attack surface modeling, Advanced smart contract analysis
Projects: Analyze economic attack vector in DeFi app, Publish vulnerability research
Books/Courses: DeFi and the Future of Finance, Blockchain Security Research

66. Security Research Scientist
Skills Needed: Academic research methods, Experimental design, Technical writing
Projects: Publish security research paper, Develop proof of concept prototype
Books/Courses: Security Engineering by Ross Anderson, Research Methodology Textbook

67. Machine Learning Security Engineer
Skills Needed: Adversarial ML concepts, Model robustness testing, Data poisoning detection
Projects: Create adversarial example attack, Harden ML model against manipulation
Books/Courses: Adversarial Machine Learning, ML Security Research Papers

68. Privacy-Preserving ML Specialist
Skills Needed: Differential privacy basics, Federated learning design, Secure data aggregation
Projects: Implement federated learning demo, Apply differential privacy to dataset
Books/Courses: Privacy-Preserving Machine Learning, Differential Privacy Guide

69. Embedded Systems Security Engineer
Skills Needed: Firmware analysis, Microcontroller architecture, Secure boot design
Projects: Analyze embedded firmware image, Implement secure boot on dev board
Books/Courses: Embedded Systems Security, Practical IoT Hacking

70. IoT Security Researcher
Skills Needed: Device protocol analysis, Firmware extraction, Wireless traffic inspection
Projects: Extract firmware from IoT device, Identify insecure communication channel
Books/Courses: IoT Hacker's Handbook, Hardware Hacking Handbook

71. Firmware Reverse Engineer
Skills Needed: Firmware unpacking, Binary analysis, Embedded debugging
Projects: Extract and reverse router firmware, Identify hardcoded credentials
Books/Courses: Practical Reverse Engineering, Firmware Security Guide

72. Hardware Security Engineer
Skills Needed: Side-channel analysis, Secure chip design basics, Cryptographic hardware concepts
Projects: Perform timing attack on lab device, Evaluate hardware threat model
Books/Courses: Hardware Security by Springer, Side Channel Attacks Guide

73. Hardware Reverse Engineer
Skills Needed: PCB analysis, Signal tracing, Chip identification
Projects: Reverse engineer simple PCB board, Map hardware components and functions
Books/Courses: Hardware Hacking Handbook, Practical Electronics for Inventors

74. Automotive Cybersecurity Engineer
Skills Needed: CAN bus protocol, ECU architecture, Automotive threat modeling
Projects: Simulate CAN message injection, Secure in-vehicle network design
Books/Courses: Automotive Cybersecurity Engineering Handbook, Car Hacking Research

75. Industrial Control Systems Security Specialist
Skills Needed: SCADA architecture, OT network segmentation, ICS threat detection
Projects: Build mini ICS lab simulation, Identify insecure PLC communication
Books/Courses: Industrial Network Security, SANS ICS Training

76. Medical Device Security Specialist
Skills Needed: Embedded safety standards, Regulatory compliance awareness, Firmware testing
Projects: Threat model medical device, Assess firmware update mechanism
Books/Courses: Medical Device Cybersecurity Guide, FDA Security Documentation

77. Aerospace Security Researcher
Skills Needed: Avionics systems basics, Safety-critical system analysis, Secure communication protocols
Projects: Analyze simulated avionics data link, Design secure telemetry model
Books/Courses: Aerospace Cybersecurity Frameworks, Safety Engineering Textbook

78. Telecom and 5G Security Specialist
Skills Needed: Telecom protocols, 5G architecture, Signaling security analysis
Projects: Map 5G core components, Analyze signaling attack scenarios
Books/Courses: 5G Security Guide, Telecom Security Fundamentals

79. Radio Protocol Security Engineer
Skills Needed: Wireless protocol analysis, RF basics, Packet decoding
Projects: Capture and analyze Bluetooth traffic, Identify weak pairing method
Books/Courses: Wireless Security Guide, Software Defined Radio Tutorials

80. Satellite Communications Security Analyst
Skills Needed: Satellite network architecture, Signal integrity analysis, Threat modeling
Projects: Map satcom communication flow, Assess spoofing risks
Books/Courses: Satellite Communications Systems, Space Security Research Papers

81. GPS and GNSS Security Specialist
Skills Needed: GNSS signal structure, Spoofing detection, Signal integrity testing
Projects: Simulate GPS spoofing scenario, Design detection strategy
Books/Courses: GNSS Security Research, Navigation Systems Engineering

82. Radio Frequency Security Researcher
Skills Needed: RF analysis, Signal injection testing, Wireless fuzzing
Projects: Build SDR lab setup, Identify insecure RF protocol implementation
Books/Courses: SDR Fundamentals, RF Security Whitepapers

83. Red Team Infrastructure Engineer
Skills Needed: Command and control setup, Cloud infrastructure scripting, Operational security
Projects: Build private C2 server lab, Deploy covert infrastructure simulation
Books/Courses: Red Team Infrastructure Guides, Advanced Adversary Emulation

84. Purple Team Automation Engineer
Skills Needed: Attack simulation scripting, Detection validation, Automation workflows
Projects: Automate attack replay scenarios, Validate blue team detections
Books/Courses: Purple Teaming Methodologies, MITRE ATT&CK Defender

85. Attack Surface Management Analyst
Skills Needed: External asset discovery, Exposure analysis, Continuous monitoring
Projects: Map external attack surface of lab domain, Identify exposed services
Books/Courses: Attack Surface Management Guide, OSINT Asset Discovery Training

86. Bug Bounty Specialist
Skills Needed: Recon techniques, Vulnerability chaining, Report writing
Projects: Submit valid bug bounty report, Build personal testing methodology
Books/Courses: Real-World Bug Hunting, PortSwigger Academy

87. Bug Bounty Program Manager
Skills Needed: Program scoping, Vulnerability triage, Community coordination
Projects: Draft bug bounty policy, Manage simulated disclosure workflow
Books/Courses: Bug Bounty Program Management Guide, Responsible Disclosure Frameworks

88. Vulnerability Management Analyst
Skills Needed: Risk prioritization, Patch coordination, CVSS scoring
Projects: Analyze vulnerability scan results, Create remediation plan
Books/Courses: Vulnerability Management Lifecycle Guide, CVSS Documentation

89. Patch Management Engineer
Skills Needed: Update deployment strategy, Change management, System testing
Projects: Deploy staged patch rollout, Validate patch effectiveness
Books/Courses: Enterprise Patch Management Guide, Windows Server Administration

90. Secure Compiler Engineer
Skills Needed: Compiler design basics, Memory safety mechanisms, Code optimization awareness
Projects: Implement basic compiler hardening feature, Analyze mitigation bypass
Books/Courses: Engineering a Compiler, Compiler Security Research Papers

91. Browser Security Engineer
Skills Needed: Sandbox architecture, Web engine internals, Exploit mitigation
Projects: Analyze browser sandbox escape case, Implement security patch simulation
Books/Courses: The Tangled Web, Browser Security Research

92. TLS and SSL Engineer
Skills Needed: TLS handshake analysis, Certificate lifecycle management, Secure configuration
Projects: Configure hardened TLS server, Analyze weak cipher suite scenario
Books/Courses: Bulletproof TLS and PKI, Applied Cryptography

93. Authentication Engineer
Skills Needed: Identity protocol design, MFA implementation, Session security
Projects: Implement secure login flow with MFA, Audit authentication weaknesses
Books/Courses: OAuth 2 Simplified, Identity Management Guide

94. Biometrics Security Researcher
Skills Needed: Biometric system analysis, Spoofing detection, Privacy implications
Projects: Test fingerprint spoof resistance, Evaluate facial recognition bypass
Books/Courses: Biometrics Security Handbook, ML Security Fundamentals

95. Insider Threat Analyst
Skills Needed: Behavioral analysis, Log correlation, Risk profiling
Projects: Detect anomalous user behavior in logs, Build insider threat model
Books/Courses: Insider Threat Detection Guide, Behavioral Analytics Training

96. Personnel Security and Vetting Specialist
Skills Needed: Background investigation processes, Clearance procedures, Risk evaluation
Projects: Draft personnel risk assessment framework, Simulate clearance review
Books/Courses: Personnel Security Standards, Government Vetting Guides

97. Cyber Policy Analyst
Skills Needed: Regulatory analysis, Policy drafting, Geopolitical awareness
Projects: Analyze national cyber policy, Write policy recommendation brief
Books/Courses: Cybersecurity Policy Frameworks, International Cyber Law

98. Cyber Law Attorney
Skills Needed: Technology law fundamentals, Incident legal response, Regulatory compliance
Projects: Draft breach notification template, Analyze legal case study
Books/Courses: Cybersecurity Law Textbook, Privacy and Data Protection Law

99. Cyber Insurance Analyst
Skills Needed: Risk quantification, Claims analysis, Financial modeling
Projects: Assess cyber risk profile for sample company, Calculate potential loss scenario
Books/Courses: Cyber Risk Quantification Guide, Insurance and Risk Management

100. Risk Quantification Analyst (FAIR)
Skills Needed: FAIR methodology, Statistical modeling, Loss estimation
Projects: Perform FAIR analysis on breach scenario, Present quantified risk report
Books/Courses: Measuring and Managing Information Risk, FAIR Certification Training

101. Security Metrics and Data Analyst
Skills Needed: Data visualization, KPI design, Log data analysis
Projects: Build security dashboard with key metrics, Analyze incident trends over time
Books/Courses: Storytelling with Data, Security Operations Analytics

102. Incident Communications Lead
Skills Needed: Crisis communication, Executive briefing, Stakeholder coordination
Projects: Draft breach communication plan, Simulate executive incident briefing
Books/Courses: Crisis Communication Guide, Cyber Incident Management

103. eDiscovery Specialist
Skills Needed: Digital evidence handling, Legal document review, Data preservation methods
Projects: Process forensic dataset for litigation, Create evidence chain documentation
Books/Courses: Electronic Discovery for Small Cases, Digital Evidence and Computer Crime

104. Vulnerability Research Platform Engineer
Skills Needed: Platform architecture, Scalable scanning systems, Automation scripting
Projects: Build internal vulnerability tracking platform, Integrate automated scanners
Books/Courses: Designing Data-Intensive Applications, Secure Coding Practices

105. Open Source Security Maintainer
Skills Needed: Code review discipline, Community coordination, Patch management
Projects: Triage security issues in open source repo, Release patched version
Books/Courses: Producing Open Source Software, Secure Development Lifecycle Guide

106. Research Lab Engineer
Skills Needed: Prototype development, Experimental validation, Technical documentation
Projects: Build proof-of-concept defense tool, Document experimental results
Books/Courses: Security Engineering by Ross Anderson, Applied Research Methods

107. Security Evangelist / Developer Advocate
Skills Needed: Public speaking, Technical storytelling, Community engagement
Projects: Deliver technical security talk, Publish educational blog series
Books/Courses: Presentation Zen, Developer Advocacy Guides

108. Security Curriculum Designer
Skills Needed: Instructional design, Skill gap analysis, Learning path creation
Projects: Design beginner to advanced security curriculum, Create assessment framework
Books/Courses: Design for How People Learn, Instructional Design Foundations

109. CTF Problem Writer / Judge
Skills Needed: Challenge design, Vulnerability creation, Puzzle balancing
Projects: Create 5 CTF challenges across categories, Host mini CTF event
Books/Courses: The CTF Field Guide, Game Design Fundamentals

110. Bug Bounty Community Manager
Skills Needed: Community moderation, Vulnerability triage coordination, Policy enforcement
Projects: Launch community guidelines, Manage disclosure workflow simulation
Books/Courses: Community Management Handbook, Responsible Disclosure Frameworks

111. Security Compliance Auditor
Skills Needed: Audit methodology, Control validation, Evidence assessment
Projects: Conduct mock ISO audit, Produce compliance findings report
Books/Courses: ISO 27001 Auditor Guide, IT Auditing and Assurance

112. Privacy Lawyer (Tech Focused)
Skills Needed: Data protection law, Regulatory interpretation, Contract drafting
Projects: Draft data processing agreement, Analyze cross-border data case
Books/Courses: Data Protection and Privacy Law, International Privacy Law

113. Cyber Threat Simulation Designer
Skills Needed: Scenario planning, Adversary modeling, Exercise facilitation
Projects: Design tabletop cyber exercise, Run live attack simulation drill
Books/Courses: Cyber Wargaming Guide, Threat Simulation Methodologies

114. Red Team / Purple Team Coach
Skills Needed: Skill mentoring, Exercise planning, Performance evaluation
Projects: Develop red team training roadmap, Run purple team workshop
Books/Courses: Coaching for Performance, Advanced Red Teaming

115. Secure UX Designer
Skills Needed: Secure interaction design, User consent modeling, Usability testing
Projects: Redesign login flow for security and usability, Conduct security-focused UX test
Books/Courses: Don't Make Me Think, Privacy by Design Principles

116. Blue Team Tool Developer
Skills Needed: Defensive tool development, Log parsing, Automation scripting
Projects: Build open source detection tool, Publish detection engine on GitHub
Books/Courses: Python for Cybersecurity, Engineering Secure Software

117. Offensive Tool Developer
Skills Needed: Exploit framework development, Payload engineering, Code obfuscation awareness
Projects: Build modular exploitation framework, Develop custom payload loader
Books/Courses: Hacking: The Art of Exploitation, Advanced Offensive Security Training

118. Security Operations Researcher
Skills Needed: Workflow optimization, Detection strategy design, Data analysis
Projects: Improve SOC detection pipeline efficiency, Publish operational research findings
Books/Courses: Security Operations Guide, Process Optimization Methods

119. Cybersecurity Venture Analyst
Skills Needed: Market analysis, Technical due diligence, Risk evaluation
Projects: Evaluate security startup portfolio, Write investment thesis
Books/Courses: Venture Deals, Cybersecurity Industry Reports

120. Security Tech Writer / Journalist
Skills Needed: Technical translation skills, Research methodology, Clear communication
Projects: Publish investigative security article, Interview security researcher
Books/Courses: On Writing Well, Investigative Journalism Techniques`;

function splitItems(value) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseRoadmaps(rawText) {
  const roadmapsById = {};
  const entryRegex = /(\d+)\.\s([^\n]+)\nSkills Needed:\s([^\n]+)\nProjects:\s([^\n]+)\nBooks\/Courses:\s([^\n]+)(?:\n|$)/g;

  let match = entryRegex.exec(rawText);
  while (match) {
    const id = Number(match[1]);
    roadmapsById[id] = {
      title: match[2].trim(),
      skills: splitItems(match[3]),
      projects: splitItems(match[4]),
      booksCourses: splitItems(match[5]),
    };
    match = entryRegex.exec(rawText);
  }

  return roadmapsById;
}

export const ROADMAPS_BY_ID = parseRoadmaps(RAW_ROADMAP_TEXT);
