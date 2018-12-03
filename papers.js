"use strict";

const papers = [
  {
    category: "cs",
    title: "A Tutorial Introduction to the Lambda Calculus",
    read: "02/10/2018",
    pdf: "lambda.pdf"
  },
  {
    category: "ml",
    title: "Imagenet Classifiation with Deep Convolutional Neural Networks",
    read: "29/09/2018",
    pdf: "imagenet.pdf"
  },
  {
    category: "ml",
    title: "Gradient-Based Learning Applied to Document Recognition",
    read: null,
    pdf: "lenet.pdf"
  },
  {
    category: "ml",
    title: "The Case for Learned Index Structures",
    read: "01/01/2018"
  },
  {
    category: "pl",
    title: "Bringing the Web up to Speed with WebAssembly",
    read: "02/01/2018"
  },
  {
    category: "sec",
    title: "Forwarding-Loop Attacks in Content Delivery Networks",
    read: "01/05/2018"
  },
  {
    category: "dist",
    title: "Swim: Scalable Weakly-consistent Infection-style Process Group Membership Protocol",
    read: "02/05/2018"
  },
  {
    category: "dist",
    title: "Lifeguard: Local Health Awareness for More Accurate Failure Detection",
    read: "03/05/2018"
  },
  {
    category: "pl",
    title: "Non-Recursive Make Considered Harmful",
    read: "04/05/2018",
    pdf: "nrmch.pdf"
  },
  {
    category: "dist",
    title: "Cassandra - A Decentralized Structured Storage System",
    read: "05/05/2018"
  },
  {
    category: "dist",
    title: "A Conflict-Free Replicated JSON Datatype",
    read: "06/05/2018"
  },
  {
    category: "dist",
    title: "The Zettabyte File System",
    read: null
  },
  {
    category: "dist",
    title: "Serializable Snapshot Isolation in PostgreSQL",
    read: null
  },
  {
    category: "dist",
    title: "Analysis of Operational Transformation Algorithms",
    read: null
  },
  {
    category: "dist",
    title: "Spanner: Google's Globally Distributed Database",
    read: null
  },
  {
    category: "dist",
    title: "Dynamo: Amazon's Highly Available Key-value Store",
    read: null
  },
  {
    category: "dist",
    title: "Efficient Reconciliation and Flow Control for Anti-Entropy Protocols",
    read: null
  },
  {
    category: "dist",
    title: "The Phi Accrual Failure Detector",
    read: null
  },
  {
    category: "dist",
    title: "SEDA: An Architecture for Well-Conditioned, Scalable Internet Services",
    read: null
  },
  {
    category: "dist",
    title: "Managing Update Conflicts in Bayou, a Weakly Connected Replicated Storage System",
    read: null
  },
  {
    category: "dist",
    title: "The Ganglia Distributed Monitoring System: Design, Implementation, and Experience",
    read: null
  },
  {
    category: "dist",
    title: "ZooKeeper: Wait-free coordination for Internet-scale systems",
    read: null
  },
  {
    category: "dist",
    title: "Impossibility of Distributed Consensus with One Faulty Process",
    read: null
  },
  {
    category: "dist",
    title: "Kafka: a Distributed Messaging System for Log Processing",
    read: null
  },
  {
    category: "dist",
    title: "Coracle: Evaluating Consensus at the Internet Edge",
    read: null
  },
  {
    category: "dist",
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    read: null
  },
  {
    category: "dist",
    title: "MapReduce: A major step backwards",
    read: null
  },
  {
    category: "dist",
    title: "Practical Skew Handling in Parallel Joins",
    read: null
  },
  {
    category: "dist",
    title: "Large-scale cluster management at Google with Borg",
    read: null
  },
  {
    category: "dist",
    title: "Spark: Cluster Computing with Working Sets",
    read: null
  },
  {
    category: "dist",
    title: "The PageRank Citation Ranking: Bringing Order to the Web",
    read: null
  },
  {
    category: "dist",
    title: "Pregel: A System for Large-Scale Graph Processing",
    read: null
  },
  {
    category: "dist",
    title: "GraphChi: Large-Scale Graph Computation on Just a PC",
    read: null
  },
  {
    category: "dist",
    title: "Impala: A Modern Open-Source SQL Engine for Hadoop",
    read: null
  },
  {
    category: "ml",
    title: "Deep Residual Learning for Image Recognition",
    read: "30/09/2018",
    pdf: "deepres.pdf"
  },
  {
    category: "ml",
    title: "Going Deeper with Convolutions",
    read: "11/10/2018",
    pdf: "deeper.pdf"
  },
  {
    category: "ml",
    title: "Very Deep Convolutional Networks for Large-Scale Image Recognition",
    read: null,
    pdf: "verydeep.pdf"
  },
  {
    category: "ml",
    title: "Fast R-CNN",
    read: null,
    pdf: "fastrcnn.pdf"
  },
  {
    category: "ml",
    title: "OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks",
    read: "15/10/2018",
    pdf: "overfeat.pdf"
  },
  {
    category: "ml",
    title: "You Only Look Once: Unified, Real-Time Object Detection",
    read: null,
    pdf: "yolo.pdf"
  },
  {
    category: "ml",
    title: "YOLO9000: Better, Faster, Stronger",
    read: null,
    pdf: "yolo9k.pdf"
  },
  {
    category: "ml",
    title: "An Efficient Bandit Algorithm for Realtime Multivariate Optimization",
    read: null
  },
  {
    category: "ml",
    title: "Connectionist Temporal Classification: Labelling Unsegmented Sequence Data with Recurrent Neural Networks",
    read: null,
    pdf: "connectionist.pdf"
  },
  {
    category: "ml",
    title: "Neural Machine Translation by Jointly Learning to Align and Translate",
    read: null,
    pdf: "nmt.pdf"
  },
  {
    category: "ml",
    title: "BLEU: a Method for Automatic Evaluation of Machine Translation",
    read: null,
    pdf: "blue.pdf"
  },
  {
    category: "ml",
    title: "Sequence to Sequence Learning with Neural Networks",
    read: null,
    pdf: "seq2seq.pdf"
  },
  {
    category: "ml",
    title: "Efficient Estimation of Word Representations in Vector Space",
    read: null,
    pdf: "eewr.pdf"
  },
  {
    category: "ml",
    title: "A Neural Probabilistic Language Model",
    read: null,
    pdf: "nplm.pdf"
  },
  {
    category: "dist",
    title: "The Design and Implementation of Modern Column-Oriented Database Systems",
    read: null,
    pdf: "dicol.pdf"
  },
  {
    category: "ml",
    title: "On Vectorization of Deep Convolutional Neural Networks for Vision Tasks",
    read: null,
    pdf: "vdcnn.pdf"
  },
  {
    category: "ml",
    title: "A Neural Algorithm of Artistic Style",
    read: null,
    pdf: "naas.pdf"
  },
  {
    category: "ml",
    title: "Visualizing and Understanding Convolutional Networks",
    read: null,
    pdf: "vucn.pdf"
  },
  {
    category: "ml",
    title: "DeepFace: Closing the Gap to Human-Level Performance in Face Verification",
    read: null,
    pdf: "deepface.pdf"
  },
  {
    category: "cs",
    title: "On Computable Numbers, with an Application to the Entscheidungsproblem",
    read: null
  },
  {
    category: "ml",
    title: "Restricted Boltzmann Machines for Collaborative Filtering",
    read: null,
    pdf: "rbmcf.pdf"
  },
  {
    category: "ml",
    title: "A Tutorial on Principal Component Analysis",
    read: null,
    pdf: "pca.pdf"
  },
  {
    category: "ml",
    title: "Mastering Chess and Shogi by Self-Play with General Reinforcement Learning Algorithm",
    read: "05/10/2018",
    pdf: "azero.pdf"
  },
  {
    category: "ml",
    title: "Matrix Factorization Model in Collaborative Filtering Algorithms: A Survey",
    read: null,
    pdf: "mfmcf.pdf"
  },
  {
    category: "ml",
    title: "Mastering the Game of Go without Human Knowledge",
    read: "07/10/2018",
    pdf: "agz.pdf",
  },
  {
    category: "ml",
    title: "Bandit based Monte-Carlo Planning",
    read: null,
    pdf: "bbmcp.pdf"
  },
  {
    category: "pl",
    title: "Data Structure-Aware Heap Partitioning",
    read: null,
    pdf: "dsahp.pdf"
  },
  {
    category: "ml",
    title: "The Grand Challenge of Computer Go: Monte Carlo Tree Search and Extensions",
    read: null,
    pdf: "gccg.pdf"
  },
  {
    category: "ml",
    title: "Identifying and attacking the saddle point problem in high-dimensional non-convex optimization",
    read: null,
    pdf: "iassp.pdf"
  },
  {
    category: "ml",
    title: "A Survey of Monte Carlo Tree Search Methods",
    read: null,
    pdf: "mcts.pdf"
  },
  {
    category: "ml",
    title: "Structured Parallel Programming for Monte Carlo Tree Search",
    read: null,
    pdf: "sppmcts.pdf"
  },
  {
    category: "ml",
    title: "Taking the Human Out of the Loop: A Review of Bayesian Optimization",
    read: null,
    pdf: "rbo.pdf"
  },
  {
    category: "sec",
    title: "Breaking the x86 ISA",
    read: null,
    pdf: "bx86.pdf"
  },
  {
    category: "dist",
    title: "In Search of an Understandable Consensus Algorithm",
    read: "01/01/2018",
    pdf: "raft.pdf"
  },
  {
    category: "ml",
    title: "Provable Bounds for Learning Some Deep Representations",
    read: null,
    pdf: "pblsdr.pdf"
  },
  {
    category: "sec",
    title: "Reflections on Trusting Trust",
    read: "11/10/2018",
    pdf: "rott.pdf"
  },
  {
    category: "cs",
    title: "Algorithms for Constraint-Satisfaction Problems: A Survey",
    read: null,
    pdf: "acsps.pdf"
  },
  {
    category: "cs",
    title: "Algorithms for Constraint Satisfaction Problem",
    read: null,
    pdf: "algcsp.pdf"
  },
  {
    category: "cs",
    title: "The Alldifferent Constraint: A Survey",
    read: null,
    pdf: "alldiff.pdf"
  },
  {
    category: "cs",
    title: "What Every Programmer Should Know About Memory",
    read: null,
    pdf: "memory.pdf"
  },
  {
    category: "cs",
    title: "Futexes are Tricky",
    read: "03/12/2018",
    pdf: "fat.pdf"
  },
  {
    category: "cs",
    title: "Wait-Free Synchronization",
    read: null,
    pdf: "wfs.pdf"
  }
];
