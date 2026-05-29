// Application Data
const projectsData = {
  'pm2-5-seasonal': {
    title: 'Modeling of Seasonal Dynamics for Traffic-Dominant Particulate Matter Pollution in the Indo-Gangetic Plain',
    category: 'Air Quality',
    description: 'Multi-scale wavelet analysis, rolling PMF, and season-specific ML to understand PM2.5 dynamics in Delhi (2019-2024).',
    fullDescription: `Abstract: PM2.5 in the Indo-Gangetic Plain fluctuates strongly: winter levels reach 140-180 ug/m3 and monsoon levels drop to 35-55 ug/m3, yet regulations rarely adjust to the 4.5-5x seasonal swing. We analyze Delhi air quality (2019-2024) using rolling Positive Matrix Factorisation (PMF), k-means clustering, continuous wavelet analysis, and season-focused machine learning to determine when and how to act. Wavelet analysis identifies three rhythms: seasonal (~200 days), transitional (75-100 days), and weather-driven (10-40 days). K-means reveals five pollution episode types with distinct source-weather combinations. Rolling PMF shows traffic's PM2.5 share rises to 35-50% in winter (annual average 22 +/- 8%) and falls to 10-15% in the monsoon. Shannon entropy indicates winter sources are concentrated (1.6-1.9 bits) while monsoon sources are more dispersed (2.7-3.1 bits), requiring broader control strategies. Non-exhaust sources (road dust, tire wear, brake dust) account for 70-85% of vehicle-related PM. The apparent PM2.5 decline of -2.8 ug/m3 per year (p<0.05) disappears after deweathering; the adjusted trend is weaker and not significant (-1.2 +/- 0.8 ug/m3 per year, p>0.05). Season-specific ML models outperform a year-round model (R2 0.89 winter, 0.93 monsoon vs 0.74 overall). Policy implications: targeted winter measures (heavy-truck limits, heating regulation, ammonia reduction) can cut PM by 30-40%, and post-monsoon biomass-burning controls can reduce sources by 50-70%. Combined, annual PM can fall 40-50%, moving Delhi toward the WHO interim target of 35 ug/m3 by 2028-2030. The study supports season-aware air quality management over uniform year-round controls.`,
    technologies: ['Wavelet Analysis', 'Rolling PMF', 'K-Means', 'Season-specific ML'],
    metrics: ['Winter traffic share 35-50%', 'Seasonal models R2 up to 0.93', 'Five-year dataset (2019-2024)'],
    authors: ['Dr. Adinarayana Badveeti', 'Ayush Chauhan'],
    venue: 'Sustainable Intelligent Infrastructure (SII) - Submission',
    year: '2026',
    status: 'Submitted',
    pdfLink: 'Papers/Modeling of Seasonal Dynamics for Traffic-Dominant Particulate Matter Pollution in The Indo-Gangetic Plain- Using Multi-Scale Wavelet Analysis, Source Apportionment, And Episode-Specific Control Strategies.pdf'
  },
  'sukhna-water-transport': {
    title: 'Sustainable Water Transport and Lake Restoration: Integrating AI and Satellite Data for Sukhna Lake',
    category: 'Ecological Restoration',
    description: 'AI-driven predictive modeling with satellite remote sensing to forecast SDT, Chlorophyll-a, and LST in Sukhna Lake.',
    fullDescription: `Abstract: This paper presents a comprehensive methodology to address the challenges of eutrophication and ecological degradation in Sukhna Lake (Chandigarh, India), combining AI-driven predictive modeling with eco-innovative solutions. Utilizing satellite remote sensing data from Landsat-7 ETM+ and ASTER, alongside in-situ measurements, the proposed framework predicts key water transport quality parameters, such as Secchi Disk Transparency (SDT), Chlorophyll-a, and Land Surface Temperature (LST). These parameters are critical for forecasting trends in eutrophication and assessing overall lake health. The study also introduces floating treatment wetlands and bioremediation as nature-based, adaptive solutions to mitigate nutrient inflow and improve water quality. The AI model provides a proactive, scalable approach for urban lake restoration, offering valuable insights for sustainable ecosystem management practices in urban lakes worldwide. This paper represents a step toward merging cutting-edge technology (AI and satellite remote sensing) with sustainable water transport of ecological interventions to tackle pressing sustainable environmental issues like eutrophication. The goal is not only to restore Sukhna Lake but also to create a scalable framework that can be used globally for urban lake restoration and sustainable transport ecosystem management for Chandigarh city in India.`,
    technologies: ['Landsat-7 ETM+', 'ASTER', 'Remote Sensing', 'AI Modeling'],
    metrics: ['IAHR World Congress 2025', 'Nature-based interventions'],
    authors: ['Badveeti Adinarayana', 'Ayush Chauhan'],
    venue: '41st IAHR World Congress (Extended Abstract)',
    year: '2025',
    status: 'Conference Submission',
    pdfLink: 'Papers/SUSTAINABLE WATER TRANSPORT AND LAKE RESTORATION- INTEGRATING AI AND SATELLITE DATA FOR SUKHNA LAKE IN CHANDIGARH GREEN CITY, INDIA FOR ACHIEVING TO SDGs-2030.pdf'
  },
  'sukhna-ai-restoration': {
    title: 'AI-Driven Predictive Modelling and Sustainable Interventions for Lake Restoration',
    category: 'Ecological Restoration',
    description: 'Sukhna Lake case study combining AI and satellite imagery to guide restoration strategies.',
    fullDescription: `Abstract: This paper proposes a comprehensive methodology to address eutrophication and ecological degradation in Sukhna Lake, Chandigarh, using AI-driven predictive modeling combined with eco-innovative solutions. By leveraging satellite remote sensing data from Landsat-7 ETM+ and ASTER along with in-situ measurements, this framework enables the prediction of key water quality parameters and recommends sustainable, nature-based interventions. The proposed model forecasts trends in eutrophication using parameters such as Secchi Disk Transparency (SDT), Chlorophyll-a, and Land Surface Temperature (LST), while introducing floating treatment wetlands and bioremediation as adaptive solutions to reduce nutrient inflow. This framework aims to deliver a proactive, scalable approach for urban lake restoration, providing essential insights into sustainable ecosystem management practices globally.`,
    technologies: ['Remote Sensing', 'AI Modeling', 'Water Quality', 'GIS'],
    metrics: ['CISSC 2025 submission', 'Sukhna Lake case study'],
    authors: ['Ayush Chauhan', 'Dr. Badveeti Adinarayana'],
    venue: 'CISSC 2025',
    year: '2025',
    status: 'Conference Submission',
    pdfLink: 'Papers/AI-Driven Predictive Modelling and Sustainable Interventions for Lake Restoration.pdf'
  },
  'gender-cycling-ai': {
    title: 'Development of AI Model for Gender Differences in Bicycle Mobility of Green Urban Areas',
    category: 'Urban Mobility',
    description: 'Published study on gender-specific cycling behavior, motivators, and constraints in Chandigarh.',
    fullDescription: `Abstract: Gender differences in cycling patterns, motivators, and constraints in Chandigarh, India were studied by researchers from Punjab Engineering College. The primary objective is to explore the gender-specific differences in cycling behaviour, including the distinct patterns, motivators, and constraints experienced by male and female cyclists. A secondary objective is to provide actionable policy recommendations to enhance cycling infrastructure and promote cycling as a sustainable mode of transportation and recreation in Chandigarh. The researchers collected data on traffic flow at intersections in different zones, conducted online and field surveys, and analyzed regulations and guidelines regarding Non-Motorized Transportation modes established by local governmental entities in Chandigarh. The study found that male cyclists predominantly used bicycles for commuting short distances efficiently, while females gravitated toward recreational cycling. Safety concerns were identified as a deterrent to daily commuting by bicycle, particularly affecting female cyclists. Dedicated cycling infrastructure and gender-sensitive policies were found to be vital for increasing female participation in cycling. Social norms and responsibilities also influenced women's cycling habits. Despite gender differences, both genders shared an interest in cycling for exercise and recreation. The study emphasized the need for gender-sensitive policies, urban planning initiatives, and improved safety measures to promote cycling as a sustainable and safe mode of transportation and recreation in Chandigarh. Improving safety protocols for cyclists of all genders is vital to reducing accidents and promoting cycling as a safe and practical mode of transportation within the city. The study provides evidence for making effective policy changes and infrastructure improvements to make Chandigarh more inclusive and biker-friendly. Promoting cycling as a sustainable mode of transportation and recreation among women is crucial for developing inclusive and sustainable urban areas. The researchers proposed machine learning techniques such as decision trees, random forest, and gradient boosting to examine the relationship between gender and cycling patterns, motivators, and constraints. Thematic analysis was used on collected qualitative data to identify recurring themes, patterns, and nuances. Analysis of the current cycle tracks in Chandigarh was done using photographic surveys and public polls. The team identified a lack of data on gender differences in cycling in Chandigarh, India. Such data is essential to improve the conditions of cycle tracks in the city since men and women have different cycling requirements. The study highlights the importance of gender-sensitive policies and urban planning initiatives in Chandigarh. In conclusion, the study provides valuable insights into gender differences in cycling patterns, motivators, and constraints in Chandigarh, India. The study emphasizes the need for gender-sensitive policies, urban planning initiatives, and improved safety measures to promote cycling as a sustainable and safe mode of transportation and recreation within the city.`,
    technologies: ['Survey Research', 'Machine Learning', 'NMT Policy'],
    metrics: ['Innovative Infrastructure Solutions (2024)', 'Policy recommendations for inclusive cycling'],
    authors: ['B. Adinarayana', 'Ayush Chauhan', 'Balkaran Singh Sohal', 'Aryan', 'Reetik Kumar', 'Shubham Sharma'],
    venue: 'Innovative Infrastructure Solutions',
    year: '2024',
    status: 'Published',
    pdfLink: 'Papers/Development of AI model for gender differences in bicycle mobility of green urban areas.pdf',
    doiLink: 'https://doi.org/10.1007/s41062-024-01709-w'
  },
  'pedestrian-behavior-sdgs': {
    title: 'Modeling Pedestrian Walking Behavior Parameters and Pedestrian Safety at Congested Urban Intersections',
    category: 'Urban Mobility',
    description: 'Context-specific pedestrian safety modeling for educational and recreational zones aligned with SDGs-2030.',
    fullDescription: `Abstract: In developing countries like India, especially in well-planned cities such as Chandigarh, pedestrian safety at urban intersections is shaped by factors including population density, land-use patterns, public transport availability, and surrounding activity intensity. Improving pedestrian safety at congested intersections requires integrating these context-specific factors into traffic planning, design, and management. This study aims to model pedestrian walking behaviour parameters and enhance pedestrian safety through a comprehensive, evidence-based approach aligned with Sustainable Development Goal 11, which emphasizes inclusive, safe, resilient, and sustainable urban development. The study employs a robust methodology involving detailed field observations and systematic data collection at selected high-congestion intersections. Key parameters influencing pedestrian behavior such as traffic flow, pedestrian volume and density, signal control, and crossing characteristics are analyzed to understand movement patterns and interaction dynamics. Both quantitative and qualitative analyses are used to capture behavioral complexity in diverse urban settings. The findings offer valuable insights for urban planners and policymakers, supporting informed decisions for developing safer, more efficient, and pedestrian-friendly infrastructure. The study highlights the importance of context-sensitive, location-specific interventions to improve pedestrian safety, traffic operations, and sustainable urban mobility for all road users.`,
    technologies: ['Traffic Analysis', 'Safety Modeling', 'Field Observation'],
    metrics: ['SAFEIND 2026 submission', 'SDG-11 focus'],
    authors: ['Dr. Adinarayana Badveeti', 'Ayush Chauhan', 'Aryan', 'Reetik Kumar', 'Kasinayana Badweeti'],
    venue: 'SAFEIND 2026 (SPARC Sponsored International Conference)',
    year: '2026',
    status: 'Submitted',
    pdfLink: 'Papers/Modeling Pedestrian Walking Behavior Parameters and Pedestrian Safety at Congested Urban Intersections in Educational and Recreational Zones for SDGs-2030.pdf'
  },
  'slow-moving-traffic-control': {
    title: 'Study of Pedestrian and Slow-Moving Traffic Control Behaviour at Congested Intersections',
    category: 'Urban Mobility',
    description: 'Observational analysis of pedestrian and slow-moving traffic behavior to inform safer intersection design.',
    fullDescription: `Abstract: In developing countries like India, urban planners, traffic engineers, and policymakers must consider factors that impact pedestrian behaviour and safety, including population density, the presence of public transportation, and the nature and frequency of activities in specific areas. The study's objective is to enhance pedestrian safety by evaluating these characteristics when designing and implementing strategies for congested intersections in urban areas. The study employs an extensive observational analysis and data collection at intersections located within congested zones. By examining factors that influence pedestrian behaviour, such as traffic flow, pedestrian density, and traffic signals, the research aims to generate insights into the intricacies of navigating diverse urban landscapes. The findings can aid city planners and policymakers in making informed decisions regarding the design of safer and more efficient pedestrian infrastructure. The study underscores the significance of accounting for the unique characteristics of diverse urban areas in the design of pedestrian-friendly intersections. Through an analysis of both quantitative and qualitative aspects of pedestrian behaviour, the research offers a detailed understanding of the dynamics involved. This study underscores the significance of effectively employing context-specific interventions to address pedestrian behaviour, enhance safety, and optimize traffic flow in congested zones, supporting Sustainable Development Goal 11.`,
    technologies: ['Field Observation', 'Traffic Flow', 'Safety Planning'],
    metrics: ['Innovative Infrastructure Solutions', 'Congested intersection focus'],
    authors: ['Dr. Badveeti Adinarayana', 'Ayush Chauhan', 'Aryan', 'Reetik Kumar'],
    venue: 'Innovative Infrastructure Solutions',
    status: 'Manuscript',
    pdfLink: 'Papers/Study of Pedestrian and Slow-moving Traffic Control Behaviour at Congested Intersections.docx'
  },
  'walkability-index-pec': {
    title: 'Developing a Walkability Index for a University Green Campus',
    category: 'Urban Mobility',
    description: 'Linear Walkability Index (LWI) assessment for PEC campus using structured surveys and pedestrian metrics.',
    fullDescription: `Abstract: In developing countries like India, walkability is an important concept in sustainable urban design. Sustainable urbanisation and technological advancements have significantly transformed city landscapes, emphasizing the importance of sustainable living spaces in urban areas. Educational campuses, reflecting broader urban settings, are integral to this trend, with a walkability index as a key component. Walkability refers to how encouraging an area is to walking, influenced by factors such as pedestrian infrastructure, safety, accessibility, and environmental quality. This study examines the linear walkability index (LWI) scores of the Punjab Engineering College (PEC) campus, assessing its impact on students, faculty, and staff. The research aims to identify the strengths and weaknesses of existing pedestrian infrastructure, understand campus users' perceptions, evaluate environmental and aesthetic qualities of pedestrian spaces, and propose practical recommendations for improvement in a university campus. Using established frameworks like the Urban Walking Environment Context and the Pedestrian Level of Service (PLOS) model, the study employs surveys and observational methods to gather data. The findings reveal that while PEC boasts several strengths in existing pedestrian infrastructure, areas such as signage, aesthetic appeal, and sidewalk conditions need enhancement. The composite walkability score (CWS), calculated using a weighted scoring system, provides a quantitative summary of overall walkability. The final LWI score was 3.8 out of 5, indicating a generally positive but not perfect walkability environment. The study highlights the potential of campuses to serve as models for sustainable urban design, emphasizing the integration of walkability in PEC campus planning to achieve SDG-2030.`,
    technologies: ['LWI', 'Survey Design', 'PLOS', 'Urban Planning'],
    metrics: ['TPMDC 2024 submission', 'Campus walkability metrics'],
    authors: ['Dr. Badveeti Adinarayana', 'Ayush Chauhan', 'Aryan', 'Balkaran Singh Sohal'],
    venue: 'TPMDC 2024',
    year: '2024',
    status: 'Conference Submission',
    pdfLink: 'Papers/Developing of Walkability Index for University Green Campus.pdf'
  },
  'terrain-accessibility-gis-ahp': {
    title: 'Terrain-Sensitive Accessibility Modelling for Rural Settlements: A GIS-AHP Framework with Participatory Calibration',
    category: 'Rural Accessibility',
    description: 'GIS-AHP framework applied to West Garo Hills, Meghalaya for 1,176 habitations and service access equity.',
    fullDescription: `Abstract: Rural accessibility in hilly regions presents unique challenges that conventional proximity-based measures fail to capture adequately. This study develops a comprehensive accessibility assessment framework that integrates Geographic Information Systems (GIS) with the Analytic Hierarchy Process (AHP) to address the complex interplay of terrain constraints and service priorities in mountainous rural areas. The methodology was applied to the West Garo Hills district in Meghalaya, India, encompassing 1,176 habitations serving 501,294 residents across challenging topographic conditions. A structured stakeholder survey across 49 respondents derived consistency-validated priority weights for both service types and travel factors. Spatial analysis utilized high-resolution Digital Elevation Models to generate slope-adjusted friction surfaces, integrated with road network data to compute realistic travel-time rasters. Machine learning-enhanced analysis of Sentinel-2 satellite imagery achieved 89.7% accuracy in built-up area identification for habitation boundary extraction. Results reveal extreme spatial disparities in accessibility, with scores ranging from 0.130 to 0.642 across habitations, a 4.95-fold difference indicating severe inequity in service access. Notably, 57.7% of habitations fall into low or very low accessibility categories, while only 2.3% achieve very high accessibility scores. The analysis demonstrates an inverse relationship between settlement size and accessibility, with larger habitations experiencing lower access despite housing greater populations. This finding suggests that population concentration has not translated into proportional infrastructure investment, creating compound disadvantages for 272,260 residents living in low-accessibility areas. The AHP-GIS framework provides a participatory, terrain-aware approach to accessibility assessment that captures both physical constraints and community priorities, offering actionable insights for infrastructure planning and resource allocation in hilly rural regions.`,
    technologies: ['GIS-AHP', 'Sentinel-2', 'SRTM DEM', 'Travel-Time Modeling'],
    metrics: ['1,176 habitations', '89.7% built-up accuracy', '4.95x accessibility disparity'],
    authors: ['Ayush Chauhan', 'Ravindra Kumar'],
    venue: 'CSIR-Central Road Research Institute (CRRI)',
    status: 'Technical Report',
    pdfLink: 'Papers/Terrain-Sensitive Accessibility Modelling for Rural Settlements.pdf'
  }
};
const blogData = {
  'smart-infrastructure': {
    title: 'The Future of Smart Infrastructure',
    category: 'Technology',
    author: 'Ayush Chauhan',
    date: 'December 15, 2024',
    readTime: '5 min read',
    content: `
    <h2>Introduction</h2>
    <p>The convergence of artificial intelligence, Internet of Things (IoT), and traditional infrastructure is creating unprecedented opportunities for building smarter, more sustainable cities. As we stand at the threshold of a new era in urban development, it's crucial to understand how these technologies are reshaping the infrastructure landscape.</p>

    <h2>The Current State of Infrastructure</h2>
    <p>Traditional infrastructure systems were designed for a different era—one where data was scarce, connectivity was limited, and sustainability was an afterthought. Today's challenges demand a fundamental reimagining of how we design, build, and maintain our urban systems.</p>

    <p>Current infrastructure faces several critical challenges:</p>
    <ul>
      <li>Aging systems requiring constant maintenance and eventual replacement</li>
      <li>Inefficient resource utilization leading to waste and environmental degradation</li>
      <li>Limited adaptability to changing urban demands and climate conditions</li>
      <li>Reactive rather than predictive maintenance approaches</li>
    </ul>

    <h2>The Smart Infrastructure Revolution</h2>
    <p>Smart infrastructure represents a paradigm shift from reactive to predictive, from isolated to interconnected, and from resource-intensive to sustainable. By embedding sensors, connectivity, and intelligence into physical infrastructure, we create systems that can monitor themselves, optimize performance in real-time, and adapt to changing conditions.</p>

    <h3>Key Technologies Driving Change</h3>
    <p><strong>Artificial Intelligence and Machine Learning:</strong> These technologies enable infrastructure systems to learn from data, predict failures before they occur, and optimize operations automatically. For example, AI can analyze traffic patterns to optimize signal timing, reducing congestion and emissions.</p>

    <p><strong>IoT Sensors and Connectivity:</strong> Millions of sensors embedded in infrastructure collect real-time data on everything from structural health to environmental conditions. This data forms the foundation for intelligent decision-making.</p>

    <p><strong>Digital Twins:</strong> Virtual replicas of physical infrastructure allow engineers to simulate scenarios, test improvements, and optimize maintenance schedules without disrupting actual operations.</p>

    <h2>Real-World Applications</h2>
    <p>Smart infrastructure is already transforming cities around the world. In Singapore, smart water management systems use AI to predict and prevent pipe bursts, reducing water loss by 25%. Barcelona's smart street lighting adjusts brightness based on pedestrian and vehicle traffic, cutting energy consumption by 30%.</p>

    <h2>Challenges and Considerations</h2>
    <p>While the potential is enormous, implementing smart infrastructure faces several challenges:</p>
    <ul>
      <li><strong>Cybersecurity:</strong> Connected systems create new vulnerabilities that must be addressed</li>
      <li><strong>Interoperability:</strong> Different systems and vendors must work together seamlessly</li>
      <li><strong>Privacy:</strong> Balancing data collection benefits with citizen privacy rights</li>
      <li><strong>Investment:</strong> Significant upfront costs require long-term planning and commitment</li>
    </ul>

    <h2>The Road Ahead</h2>
    <p>The future of smart infrastructure lies in creating truly integrated, adaptive systems that serve citizens better while using resources more efficiently. This requires collaboration between engineers, data scientists, policymakers, and communities.</p>

    <p>As we move forward, the focus should be on:</p>
    <ul>
      <li>Developing standards for interoperability and data sharing</li>
      <li>Investing in cybersecurity and privacy protection</li>
      <li>Training the next generation of infrastructure professionals</li>
      <li>Ensuring equitable access to smart infrastructure benefits</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Smart infrastructure represents more than just a technological upgrade—it's a fundamental reimagining of how we build and maintain the systems that support modern life. By embracing these technologies thoughtfully and responsibly, we can create infrastructure that is not only more efficient and sustainable but also more responsive to the needs of the communities it serves.</p>

    <p>The future is smart, connected, and sustainable. The question is not whether we'll adopt these technologies, but how quickly and effectively we can implement them to create better cities for everyone.</p>
    `
  },
  'ml-transportation': {
    title: 'Machine Learning in Transportation Engineering(In Press)',
    category: 'Research',
    author: 'Ayush Chauhan',
    date: 'November 28, 2024',
    readTime: '7 min read',
    content: `
    <h2>Introduction</h2>
    <p>Transportation engineering is experiencing a revolutionary transformation through the integration of machine learning technologies. From traffic optimization to predictive maintenance, ML algorithms are solving complex transportation challenges that were previously impossible to address effectively.</p>

    <h2>Traditional Challenges in Transportation</h2>
    <p>Transportation systems face numerous challenges that traditional engineering approaches struggle to address comprehensively:</p>
    <ul>
      <li>Traffic congestion and inefficient signal timing</li>
      <li>Unpredictable maintenance needs leading to costly failures</li>
      <li>Suboptimal route planning and resource allocation</li>
      <li>Limited ability to predict and respond to changing demand patterns</li>
    </ul>

    <h2>Machine Learning Applications</h2>

    <h3>Traffic Flow Optimization</h3>
    <p>Machine learning algorithms can analyze vast amounts of traffic data to optimize signal timing, predict congestion, and suggest alternative routes. Deep learning models process real-time traffic camera feeds, GPS data, and historical patterns to make intelligent decisions about traffic management.</p>

    <h3>Predictive Maintenance</h3>
    <p>ML models can predict when infrastructure components are likely to fail, allowing for proactive maintenance that reduces costs and prevents service disruptions. By analyzing sensor data from bridges, roads, and transit vehicles, these systems can identify patterns that precede failures.</p>

    <h3>Demand Forecasting</h3>
    <p>Transportation planners use machine learning to predict ridership, traffic volumes, and infrastructure usage patterns. This enables better resource allocation and long-term planning decisions.</p>

    <h2>Case Studies</h2>

    <h3>Smart Traffic Management in Urban Areas</h3>
    <p>A recent project in Chandigarh implemented ML-based traffic optimization, resulting in a 20% reduction in average travel times and 15% decrease in fuel consumption. The system continuously learns from traffic patterns and adjusts signal timing accordingly.</p>

    <h3>Predictive Maintenance for Bridge Infrastructure</h3>
    <p>Using sensor data and machine learning, engineers can now predict bridge maintenance needs with 85% accuracy, reducing emergency repairs by 40% and extending infrastructure lifespan.</p>

    <h2>Implementation Challenges</h2>
    <p>While the potential is enormous, implementing ML in transportation faces several challenges:</p>
    <ul>
      <li><strong>Data Quality:</strong> ML models require high-quality, consistent data</li>
      <li><strong>Integration:</strong> Connecting ML systems with existing infrastructure</li>
      <li><strong>Scalability:</strong> Ensuring solutions work across different scales and contexts</li>
      <li><strong>Interpretability:</strong> Understanding how ML models make decisions</li>
    </ul>

    <h2>Future Directions</h2>
    <p>The future of ML in transportation engineering includes:</p>
    <ul>
      <li>Autonomous vehicle integration with infrastructure systems</li>
      <li>Real-time adaptive traffic management</li>
      <li>Predictive safety systems that prevent accidents</li>
      <li>Sustainable transportation optimization</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Machine learning is transforming transportation engineering from reactive to predictive, from static to adaptive. As these technologies mature, we can expect even more sophisticated applications that will make transportation safer, more efficient, and more sustainable.</p>
    `
  },
  'sustainable-planning': {
    title: 'Sustainable Urban Planning with Data Science',
    category: 'Engineering',
    author: 'Ayush Chauhan',
    date: 'October 20, 2024',
    readTime: '6 min read',
    content: `
    <h2>Introduction</h2>
    <p>The intersection of data science and urban planning is creating new possibilities for sustainable city development. By leveraging big data, machine learning, and advanced analytics, planners can make more informed decisions that balance economic growth with environmental sustainability.</p>

    <h2>The Data-Driven Planning Revolution</h2>
    <p>Traditional urban planning relied heavily on surveys, census data, and expert judgment. While these remain important, data science adds new dimensions of understanding through:</p>
    <ul>
      <li>Real-time data from IoT sensors and mobile devices</li>
      <li>Satellite imagery analysis for land use monitoring</li>
      <li>Social media and mobility data for understanding citizen behavior</li>
      <li>Predictive modeling for future scenarios</li>
    </ul>

    <h2>Key Applications</h2>

    <h3>Environmental Impact Assessment</h3>
    <p>Data science enables more accurate and comprehensive environmental impact assessments. Machine learning models can predict air quality, noise levels, and urban heat island effects based on proposed development patterns.</p>

    <h3>Transportation and Mobility</h3>
    <p>GPS tracking data and transit usage patterns help planners design more efficient transportation networks. Data analysis reveals hidden mobility patterns and helps identify areas where sustainable transportation options are most needed.</p>

    <h3>Energy Planning</h3>
    <p>Smart grid data and building energy consumption patterns inform sustainable energy planning. Machine learning can predict energy demand and optimize renewable energy integration.</p>

    <h2>Tools and Technologies</h2>
    <p>Modern sustainable planning leverages various data science tools:</p>
    <ul>
      <li><strong>GIS and Remote Sensing:</strong> For spatial analysis and land use monitoring</li>
      <li><strong>Machine Learning:</strong> For pattern recognition and prediction</li>
      <li><strong>Big Data Analytics:</strong> For processing large datasets from multiple sources</li>
      <li><strong>Simulation and Modeling:</strong> For testing planning scenarios</li>
    </ul>

    <h2>Case Study: Sustainable Development in Chandigarh</h2>
    <p>A recent project used data science to analyze urban sprawl patterns in Chandigarh and recommend sustainable development strategies. The analysis included:</p>
    <ul>
      <li>Satellite imagery analysis to track land use changes over 20 years</li>
      <li>Traffic flow analysis to identify congestion hotspots</li>
      <li>Air quality modeling to predict pollution patterns</li>
      <li>Economic impact assessment of different development scenarios</li>
    </ul>

    <h2>Challenges and Limitations</h2>
    <p>Despite its potential, data-driven sustainable planning faces several challenges:</p>
    <ul>
      <li><strong>Data Privacy:</strong> Balancing insights with citizen privacy</li>
      <li><strong>Digital Divide:</strong> Ensuring data represents all populations</li>
      <li><strong>Technical Capacity:</strong> Building skills in planning organizations</li>
      <li><strong>Integration:</strong> Combining data science with traditional planning methods</li>
    </ul>

    <h2>Best Practices</h2>
    <p>Successful implementation of data science in sustainable planning requires:</p>
    <ul>
      <li>Strong collaboration between data scientists and planners</li>
      <li>Continuous validation of models with ground-truth data</li>
      <li>Transparent communication of methodology and limitations</li>
      <li>Regular updating of models as new data becomes available</li>
    </ul>

    <h2>Future Outlook</h2>
    <p>The future of sustainable urban planning will be increasingly data-driven, with AI and machine learning playing central roles in decision-making. We can expect to see:</p>
    <ul>
      <li>Real-time adaptive planning systems</li>
      <li>Citizen-centric planning platforms</li>
      <li>Integrated sustainability dashboards</li>
      <li>Predictive climate adaptation strategies</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Data science is not replacing traditional planning wisdom but enhancing it with new capabilities. By combining human expertise with data-driven insights, we can create more sustainable, livable, and resilient cities for the future.</p>
    `
  }
};

// Theme Management
class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.init();
  }

  init() {
    this.applyTheme();
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  getStoredTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (e) {
      return null;
    }
  }

  setStoredTheme(theme) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.warn('Unable to store theme preference');
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.setStoredTheme(this.theme);
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = this.theme === 'light' ? '🌙' : '☀️';
      }
    }
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.currentPage = 'home';
    this.pages = document.querySelectorAll('.page');
    this.navLinks = document.querySelectorAll('[data-page]');
    this.navToggle = document.getElementById('navToggle');
    this.navMenu = document.getElementById('navMenu');
    this.init();
  }

  init() {
    // Navigation link handlers
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        this.navigateToPage(targetPage);
        this.closeMobileMenu();
      });
    });

    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.navMenu && !this.navMenu.contains(e.target) &&
        this.navToggle && !this.navToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      const page = e.state?.page || 'home';
      this.navigateToPage(page, false);
    });

    // Set initial state
    // At the end of NavigationManager.init()
    const initialHash = window.location.hash.replace('#', '');
    const initialPage = initialHash && document.getElementById(initialHash) ? initialHash : 'home';
    this.navigateToPage(initialPage, false);
    history.replaceState({ page: initialPage }, '', `#${initialPage}`);

  }

  navigateToPage(targetPage, updateHistory = true) {
    // Hide all pages
    this.pages.forEach(page => page.classList.remove('active'));

    // Show target page
    const targetPageElement = document.getElementById(targetPage);
    if (targetPageElement) {
      targetPageElement.classList.add('active');
      this.currentPage = targetPage;

      // Update active nav link
      this.updateActiveNavLink(targetPage);

      // Update browser history
      if (updateHistory) {
        history.pushState({ page: targetPage }, '', `#${targetPage}`);
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updateActiveNavLink(activePage) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === activePage) {
        link.classList.add('active');
      }
    });
  }

  toggleMobileMenu() {
    if (this.navMenu) {
      this.navMenu.classList.toggle('active');
    }
  }

  closeMobileMenu() {
    if (this.navMenu) {
      this.navMenu.classList.remove('active');
    }
  }
}

// Particle Animation
class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.isActive = true;
    this.init();
  }

  init() {
    if (!this.container) return;
    this.createParticles();
    this.animate();
  }

  createParticles() {
    const particleCount = window.innerWidth > 768 ? 50 : 25;
    for (let i = 0; i < particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      animation-duration: ${duration}s;
      animation-delay: ${Math.random() * 20}s;
    `;

    this.container.appendChild(particle);
    this.particles.push(particle);
  }

  animate() {
    if (!this.isActive) return;

    this.particles.forEach(particle => {
      const rect = particle.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        particle.style.top = '-10px';
        particle.style.left = Math.random() * 100 + '%';
      }
    });

    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isActive = false;
    this.particles.forEach(particle => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
    this.particles = [];
  }
}

// Dynamic Greeting
class GreetingManager {
  constructor() {
    this.greetingElement = document.getElementById('dynamicGreeting');
    if (this.greetingElement) {
      this.updateGreeting();
      // Update greeting every minute
      setInterval(() => this.updateGreeting(), 60000);
    }
  }

  updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = 'Good Morning!';
    } else if (hour < 17) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }

    if (this.greetingElement) {
      this.greetingElement.textContent = greeting;
    }
  }
}

// Project Detail Manager
class ProjectDetailManager {
  constructor() {
    this.projectButtons = document.querySelectorAll('[data-project]');
    this.projectDetailView = document.getElementById('projectDetail');
    this.projectDetailContent = document.getElementById('projectDetailContent');
    this.projectsGrid = document.getElementById('projectsGrid');
    this.backButton = document.getElementById('backToProjects');
    this.init();
  }

  init() {
    this.projectButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        this.showProjectDetail(projectId);
      });
    });

    if (this.backButton) {
      this.backButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideProjectDetail();
      });
    }
  }

  showProjectDetail(projectId) {
    const project = projectsData[projectId];
    if (!project || !this.projectDetailView || !this.projectDetailContent) return;

    const safeLink = (url) => (url ? encodeURI(url) : '');
    const pdfLink = safeLink(project.pdfLink);
    const doiLink = safeLink(project.doiLink);

    const content = `
      <div class="project-header">
        <span class="project-category">${project.category}</span>
        <h1>${project.title}</h1>
        <p class="project-subtitle">${project.description}</p>
      </div>
      
      <div class="project-content">
        <div class="project-description">
          ${project.fullDescription.split('\n').map(p => p.trim() ? `<p>${p.trim()}</p>` : '').join('')}
        </div>
        
        <div class="project-meta">
          ${project.authors ? `
          <div class="project-authors">
            <h3>Authors</h3>
            <p>${Array.isArray(project.authors) ? project.authors.join(', ') : project.authors}</p>
          </div>
          ` : ''}

          ${(project.venue || project.year) ? `
          <div class="project-venue">
            <h3>Venue</h3>
            ${project.venue ? `<p>${project.venue}</p>` : ''}
            ${project.year ? `<p class="project-year">${project.year}</p>` : ''}
          </div>
          ` : ''}

          <div class="project-tech">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
              ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
          
          <div class="project-metrics">
            <h3>Key Metrics</h3>
            <ul>
              ${project.metrics.map(metric => `<li>${metric}</li>`).join('')}
            </ul>
          </div>
          
          <div class="project-links">
            <h3>Links</h3>
            ${pdfLink ? `<a href="${pdfLink}" target="_blank" class="btn btn--outline btn--sm">Read Paper</a>` : ''}
            ${doiLink ? `<a href="${doiLink}" target="_blank" class="btn btn--primary btn--sm">DOI</a>` : ''}
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn--outline btn--sm">View on GitHub</a>` : ''}
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="btn btn--primary btn--sm">View Publication</a>` : ''}
          </div>
          
          <div class="project-status">
            <h3>Status</h3>
            <span class="status status--success">${project.status}</span>
          </div>
        </div>
      </div>
    `;

    this.projectDetailContent.innerHTML = content;

    if (this.projectsGrid) {
      this.projectsGrid.style.display = 'none';
    }
    this.projectDetailView.style.display = 'block';

    // Scroll to top of detail view
    this.projectDetailView.scrollIntoView({ behavior: 'smooth' });
  }

  hideProjectDetail() {
    if (this.projectDetailView) {
      this.projectDetailView.style.display = 'none';
    }
    if (this.projectsGrid) {
      this.projectsGrid.style.display = 'grid';
    }
  }
}

// Blog Post Manager
class BlogPostManager {
  constructor() {
    this.blogButtons = document.querySelectorAll('[data-blog]');
    this.blogPostView = document.getElementById('blogPostView');
    this.blogPostContent = document.getElementById('blogPostContent');
    this.blogListing = document.getElementById('blogListing');
    this.backButton = document.getElementById('backToBlog');
    this.init();
  }

  init() {
    this.blogButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const blogId = button.getAttribute('data-blog');
        this.showBlogPost(blogId);
      });
    });

    if (this.backButton) {
      this.backButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.hideBlogPost();
      });
    }
  }

  showBlogPost(blogId) {
    const post = blogData[blogId];
    if (!post || !this.blogPostView || !this.blogPostContent) return;

    const content = `
      <article class="blog-article">
        <header class="blog-header">
          <span class="blog-category">${post.category}</span>
          <h1>${post.title}</h1>
          <div class="blog-meta">
            <span class="blog-author">By ${post.author}</span>
            <span class="blog-date">${post.date}</span>
            <span class="blog-read-time">${post.readTime}</span>
          </div>
        </header>
        
        <div class="blog-content">
          ${post.content}
        </div>
        
        <footer class="blog-footer">
          <div class="blog-share">
            <h4>Share this post</h4>
            <div class="share-buttons">
              <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}" target="_blank" class="btn btn--outline btn--sm">Twitter</a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="btn btn--outline btn--sm">LinkedIn</a>
            </div>
          </div>
        </footer>
      </article>
    `;

    this.blogPostContent.innerHTML = content;

    if (this.blogListing) {
      this.blogListing.style.display = 'none';
    }
    this.blogPostView.style.display = 'block';

    // Scroll to top of post
    this.blogPostView.scrollIntoView({ behavior: 'smooth' });
  }

  hideBlogPost() {
    if (this.blogPostView) {
      this.blogPostView.style.display = 'none';
    }
    if (this.blogListing) {
      this.blogListing.style.display = 'block';
    }
  }
}

// Filter Manager
class FilterManager {
  constructor() {
    this.projectFilters = document.querySelectorAll('.filter-btn');
    this.blogCategories = document.querySelectorAll('.category-btn');
    this.projectCards = document.querySelectorAll('.project-card');
    this.blogPosts = document.querySelectorAll('.blog-post');
    this.init();
  }

  init() {
    // Project filters
    this.projectFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.preventDefault();
        const category = filter.getAttribute('data-filter');
        this.filterProjects(category);
        this.updateActiveFilter(this.projectFilters, filter);
      });
    });

    // Blog categories
    this.blogCategories.forEach(category => {
      category.addEventListener('click', (e) => {
        e.preventDefault();
        const categoryName = category.getAttribute('data-category');
        this.filterBlogPosts(categoryName);
        this.updateActiveFilter(this.blogCategories, category);
      });
    });
  }

  filterProjects(category) {
    this.projectCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBlogPosts(category) {
    this.blogPosts.forEach(post => {
      if (category === 'all' || post.getAttribute('data-category') === category) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }

  updateActiveFilter(filters, activeFilter) {
    filters.forEach(filter => filter.classList.remove('active'));
    activeFilter.classList.add('active');
  }
}

// Contact Form Manager
class ContactFormManager {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.successMessage = document.getElementById('formSuccess');
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));

      // Real-time validation
      const inputs = this.form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearErrors(input));
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const isValid = this.validateForm();
    if (isValid) {
      this.simulateFormSubmission();
    }
  }

  validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    if (name) isValid = this.validateField(name) && isValid;
    if (email) isValid = this.validateField(email) && isValid;
    if (subject) isValid = this.validateField(subject) && isValid;
    if (message) isValid = this.validateField(message) && isValid;

    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Clear previous errors
    this.clearErrors(field);

    switch (fieldName) {
      case 'name':
        if (value.length < 2) {
          errorMessage = 'Name must be at least 2 characters long';
          isValid = false;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Please enter a valid email address';
          isValid = false;
        }
        break;

      case 'subject':
        if (value === '') {
          errorMessage = 'Please select a subject';
          isValid = false;
        }
        break;

      case 'message':
        if (value.length < 10) {
          errorMessage = 'Message must be at least 10 characters long';
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      this.showError(field, errorMessage);
    }

    return isValid;
  }

  showError(field, message) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
      errorElement.textContent = message;
      field.classList.add('error');
    }
  }

  clearErrors(field) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
      errorElement.textContent = '';
      field.classList.remove('error');
    }
  }

  simulateFormSubmission() {
    // Simulate form submission delay
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
      if (this.form && this.successMessage) {
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';

        // Reset form after success
        setTimeout(() => {
          this.form.reset();
          this.form.style.display = 'block';
          this.successMessage.style.display = 'none';
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 5000);
      }
    }, 2000);
  }
}

// Scroll Animation Manager
class ScrollAnimationManager {
  constructor() {
    this.animatedElements = document.querySelectorAll('.fade-in');
    this.backToTopButton = document.getElementById('backToTop');
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupBackToTop();
    window.addEventListener('scroll', () => this.handleScroll());
  }

  setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      this.animatedElements.forEach(element => {
        element.classList.add('visible');
      });
      return;
    }

    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    this.animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  setupBackToTop() {
    if (this.backToTopButton) {
      this.backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show/hide back to top button
    if (this.backToTopButton) {
      if (scrollTop > 300) {
        this.backToTopButton.classList.add('visible');
      } else {
        this.backToTopButton.classList.remove('visible');
      }
    }
  }
}

// Loading Manager
class LoadingManager {
  constructor() {
    this.loadingScreen = document.getElementById('loadingScreen');
    this.init();
  }

  init() {
    // Hide loading screen once everything is ready
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hideLoading();
      }, 1000);
    });

    // Fallback in case load event doesn't fire
    setTimeout(() => {
      this.hideLoading();
    }, 3000);
  }

  hideLoading() {
    if (this.loadingScreen) {
      this.loadingScreen.classList.add('hidden');
      setTimeout(() => {
        this.loadingScreen.style.display = 'none';
      }, 300);
    }
  }
}

// Application Initialization
class Portfolio {
  constructor() {
    this.managers = {};
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    try {
      // Initialize all managers
      this.managers.loading = new LoadingManager();
      this.managers.theme = new ThemeManager();
      this.managers.navigation = new NavigationManager();
      this.managers.greeting = new GreetingManager();
      this.managers.projectDetail = new ProjectDetailManager();
      this.managers.blogPost = new BlogPostManager();
      this.managers.filter = new FilterManager();
      this.managers.contactForm = new ContactFormManager();
      this.managers.scrollAnimation = new ScrollAnimationManager();

      // Initialize particle system
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        this.managers.particles = new ParticleSystem(particlesContainer);
      }

      // Add fade-in class to elements for animation
      this.addFadeInClasses();

      console.log('Portfolio initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio:', error);
    }
  }

  addFadeInClasses() {
    const elements = document.querySelectorAll('.section-header, .project-card, .blog-card, .service-card, .about-preview__content, .hero__content');
    elements.forEach(element => {
      element.classList.add('fade-in');
    });
  }
}

// Initialize the application
const portfolio = new Portfolio();
