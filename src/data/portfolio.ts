// Auto-generated from the legacy site. Instructional-design module document links.
export type LinkType = 'cover' | 'front' | 'content' | 'key' | 'exam' | 'activity' | 'doc'

export interface ModuleLink {
  label: string
  href: string
  type: LinkType
}

export interface ModuleGroup {
  title: string
  links: ModuleLink[]
}

export interface DesignProject {
  title: string
  institution: string
  description: string
  icon: 'graduation' | 'mic'
  groups: ModuleGroup[]
  tags: string[]
}

export const designProjects: DesignProject[] = [
  {
    title: "EM6 - Language Learning Materials Development",
    institution: "Bestlink College of the Philippines - College of Teacher Education Department",
    description: "Comprehensive instructional design project creating 18 complete learning modules for Language Learning Materials Development course. Each module includes front pages, detailed content, answer keys, and assessment materials.",
    icon: "graduation",
    groups: [
      {
        title: "Preliminary Modules (1-6)",
        links: [
          { label: "Course Cover", href: "https://drive.google.com/file/d/1rqErkcTt7QDVVOSdy-nKS7Pirr5HuDHY/view?usp=drive_link", type: "cover" },
          { label: "Module 1 - Front Page", href: "https://drive.google.com/file/d/1CAp-8EntCKn8IiapFHDkR083vhuJz7et/view?usp=drive_link", type: "front" },
          { label: "Module 1 - Content", href: "https://drive.google.com/file/d/1tCUi6LPk0Z-s9DPwEfN8qTeNAPi3_9t7/view?usp=drive_link", type: "content" },
          { label: "Module 1 - Answer Key", href: "https://docs.google.com/document/d/101KQFrdZex70DHNTuHiARi6cLqw2-Otc/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 2 - Front Page", href: "https://drive.google.com/file/d/19nDzv8s7T3zMKnJWDvdrS4VU7b8QxNSh/view?usp=drive_link", type: "front" },
          { label: "Module 2 - Content", href: "https://drive.google.com/file/d/11f8NWj9uIYYmIvTWOVvkg5Zwnmbl97eJ/view?usp=drive_link", type: "content" },
          { label: "Module 2 - Answer Key", href: "https://docs.google.com/document/d/1zOPSpb-7GxjhAuzLrdLzV5a0P7t4Jm26/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 3 - Front Page", href: "https://drive.google.com/file/d/1hrAnC_JQ4mQATExJbPrWtXb7jlWicIv9/view?usp=drive_link", type: "front" },
          { label: "Module 3 - Content", href: "https://drive.google.com/file/d/10FcZfZqylIYab3OHgd-CsBZ_EwnnCIKs/view?usp=drive_link", type: "content" },
          { label: "Module 3 - Answer Key", href: "https://docs.google.com/document/d/1f6yTmxWV1nC8loYeeKe1RGEagWJvKBYM/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 4 - Front Page", href: "https://drive.google.com/file/d/1P9JFy9Ws3aQ0IHEqiOLxclFPfR0aK0kb/view?usp=drive_link", type: "front" },
          { label: "Module 4 - Content", href: "https://drive.google.com/file/d/1Cx1wWC77tEgoo7AJPfKjn7Nfhk3V-60U/view?usp=drive_link", type: "content" },
          { label: "Module 4 - Answer Key", href: "https://docs.google.com/document/d/198JvnnsXZjYmANTNd4zgIeHpa9NAUHuQ/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 5 - Front Page", href: "https://drive.google.com/file/d/1GO6cg2CY8PMh_StzA-XYnRJJ8hwJF5Fj/view?usp=drive_link", type: "front" },
          { label: "Module 5 - Content", href: "https://drive.google.com/file/d/1aU046AtoKKhzmJo3nazk7p1xxnV1Agqu/view?usp=drive_link", type: "content" },
          { label: "Module 5 - Answer Key", href: "https://docs.google.com/document/d/1xeek2qrAHneUP97haZifNl6YlEYJtsE4/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 6 - Prelim Exam", href: "https://drive.google.com/file/d/117EKqXSyMKM4Qn2gF9QNeUtXcJcgiLk2/view?usp=drive_link", type: "exam" },
          { label: "Module 6 - Exam Answer Key", href: "https://drive.google.com/file/d/1CDLecCROerW4TiKy5AmnibwOxs5xc5Ix/view?usp=drive_link", type: "key" },
        ],
      },
      {
        title: "Midterm Modules (7-12)",
        links: [
          { label: "Module 7 - Front Page", href: "https://drive.google.com/file/d/1cfqWK06dsE3qEE0jpm5MNLIymx7mbXKV/view?usp=drive_link", type: "front" },
          { label: "Module 7 - Content", href: "https://drive.google.com/file/d/1d-cixo_bTygfeCVmOI9uxWcCldjrYIXA/view?usp=drive_link", type: "content" },
          { label: "Module 7 - Answer Key", href: "https://drive.google.com/file/d/15ePzcLJoY-iv3qWj5W4UFB8pCIuCoUWb/view?usp=drive_link", type: "key" },
          { label: "Module 8 - Front Page", href: "https://drive.google.com/file/d/13rvwwlfoCFtj6bqXLLr2YfIhMaUeJSB0/view?usp=drive_link", type: "front" },
          { label: "Module 8 - Content", href: "https://drive.google.com/file/d/1-tIFpFXPQIYpTJ10whESk8QMgaDOklDl/view?usp=drive_link", type: "content" },
          { label: "Module 8 - Answer Key", href: "https://drive.google.com/file/d/1NPiOLfWjc_fNV2NwCGLseUyRsM61VGZH/view?usp=drive_link", type: "key" },
          { label: "Module 9 - Front Page", href: "https://drive.google.com/file/d/1ze7r-x7CCxNLnsf89VBYv448RsmmulAg/view?usp=drive_link", type: "front" },
          { label: "Module 9 - Content", href: "https://drive.google.com/file/d/1RODpxVVnpX8yTvMEmQF6MFV-EKfkCsmN/view?usp=drive_link", type: "content" },
          { label: "Module 9 - Answer Key", href: "https://drive.google.com/file/d/1qt8Bch754hbbND4ib46_AGhfeQQVcNeD/view?usp=drive_link", type: "key" },
          { label: "Module 10 - Front Page", href: "https://drive.google.com/file/d/1DtfGxxSIqlzU3dpsCmEzxESuIfYAeObS/view?usp=drive_link", type: "front" },
          { label: "Module 10 - Content", href: "https://drive.google.com/file/d/1iPaegYL7FqSrDzDRDAPiRz4uiYVIqR8C/view?usp=drive_link", type: "content" },
          { label: "Module 10 - Answer Key", href: "https://drive.google.com/file/d/17Rn07rJjtBYB8vvCu93SMkcE04skg381/view?usp=drive_link", type: "key" },
          { label: "Module 11 - Front Page", href: "https://drive.google.com/file/d/1AwhR_K4qevaVc_Hjo9fAzYtZYIDGZEs2/view?usp=drive_link", type: "front" },
          { label: "Module 11 - Content", href: "https://drive.google.com/file/d/14yFcHtl2IZRUIlqETQiTSxOu4lFiaNBO/view?usp=drive_link", type: "content" },
          { label: "Module 11 - Answer Key", href: "https://drive.google.com/file/d/1-LaOzwVOfDpPjFteuxvN6XrypULjjgVw/view?usp=drive_link", type: "key" },
          { label: "Module 12 - Midterm Exam", href: "https://drive.google.com/file/d/1Fw7nzBeCpTHqH3D2oDVo7UmA_Lufa8b8/view?usp=drive_link", type: "exam" },
        ],
      },
      {
        title: "Final Modules (13-18)",
        links: [
          { label: "Module 13 - Front Page", href: "https://drive.google.com/file/d/1wM2GxKCPchE3cTDmudjd8Egvuo8RUc1j/view?usp=drive_link", type: "front" },
          { label: "Module 13 - Content", href: "https://drive.google.com/file/d/13RwuNduV2nCnfcueLqVzNKrItT-lqmL7/view?usp=drive_link", type: "content" },
          { label: "Module 13 - Answer Key", href: "https://drive.google.com/file/d/1Od-LtlupAwLNpjVhZwdwBsC3ENZIT3s2/view?usp=drive_link", type: "key" },
          { label: "Module 14 - Front Page", href: "https://drive.google.com/file/d/1w99I3NHR_lDf-q_-S_MWfCP0qaVizLbo/view?usp=drive_link", type: "front" },
          { label: "Module 14 - Content", href: "https://drive.google.com/file/d/1oe1vQy5ljiZJw7ujuheiCT9KckDOPWmx/view?usp=drive_link", type: "content" },
          { label: "Module 14 - Answer Key", href: "https://drive.google.com/file/d/1AnNEjyX4f4EXmUdkKoYQZIGWkZmjhTsu/view?usp=drive_link", type: "key" },
          { label: "Module 15 - Front Page", href: "https://drive.google.com/file/d/1C5QHkqgIVaKX8Ro29BiB-ltPzyvtLGly/view?usp=drive_link", type: "front" },
          { label: "Module 15 - Content", href: "https://drive.google.com/file/d/1dl1wAGuX0LKRgYet8FbfSK4nnzN4dI-Q/view?usp=drive_link", type: "content" },
          { label: "Module 15 - Answer Key", href: "https://drive.google.com/file/d/1Z1ImqOqXixqb-aYs_XUx6FFHc0EXY6EH/view?usp=drive_link", type: "key" },
          { label: "Module 16 - Front Page", href: "https://drive.google.com/file/d/11g_ZsUsDGcVyaMvQ83fC_yGL273saEdD/view?usp=drive_link", type: "front" },
          { label: "Module 16 - Content", href: "https://drive.google.com/file/d/1PQxP2G4Vq_FWAl9Zr_rOAtY-ZBDDZodd/view?usp=drive_link", type: "content" },
          { label: "Module 16 - Answer Key", href: "https://drive.google.com/file/d/1WCeb5FBDMZqOuchlC43ovyRZ0J36rpSu/view?usp=drive_link", type: "key" },
          { label: "Module 17 - Front Page", href: "https://drive.google.com/file/d/1zFr_6aEmOculoeUP3aRDFG2WqwTRV5GW/view?usp=drive_link", type: "front" },
          { label: "Module 17 - Content", href: "https://drive.google.com/file/d/1Dt_XYcD5myaLaGc71Lcp6M_Cd2htKaoj/view?usp=drive_link", type: "content" },
          { label: "Module 17 - Answer Key", href: "https://drive.google.com/file/d/11Y5oJNsBTB7kuAif5_62BwX04J0IFWcf/view?usp=drive_link", type: "key" },
          { label: "Module 18 - Final Exam", href: "https://docs.google.com/document/d/18Oe-gsG_IPG9cxWoUUa4nleSNp3ofyXm/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "exam" },
        ],
      },
    ],
    tags: ["Instructional Design", "Educational Content", "Curriculum Development", "Assessment Design", "Learning Materials", "Teacher Education"],
  },
  {
    title: "EM10 - Speech and Stage Arts",
    institution: "Bestlink College of the Philippines - College of Teacher Education Department",
    description: "Comprehensive instructional design project creating 18 complete learning modules for Speech and Stage Arts course. Each module includes front pages, detailed content, answer keys, and assessment materials covering speech techniques, stage performance, and dramatic arts education.",
    icon: "mic",
    groups: [
      {
        title: "Preliminary Modules (1-6)",
        links: [
          { label: "Course Cover", href: "https://drive.google.com/file/d/1SYFRZApp7MIySmzqIZN2cSbdqDnXBSWB/view?usp=drive_link", type: "cover" },
          { label: "Module 1 - Front Page", href: "https://drive.google.com/file/d/1QRCKqhJj8zYhmcWRzQUJY5vMHpq9qdHX/view?usp=drive_link", type: "front" },
          { label: "Module 1 - Content", href: "https://drive.google.com/file/d/1l21Mp6NtAdO9PnDBdmpp5rI-utqtVhb5/view?usp=drive_link", type: "content" },
          { label: "Module 1 - Answer Key", href: "https://docs.google.com/document/d/1-FadSIlE8JmXDh-0OnYhfF-qzMIFLAHF/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 2 - Front Page", href: "https://drive.google.com/file/d/1cs9lVtL_1jRs20HrGPTQSm_rx6gVQiu5/view?usp=drive_link", type: "front" },
          { label: "Module 2 - Content", href: "https://drive.google.com/file/d/1LKDfD-JSh2zgrxt9v3rMjkyacCEdMeq_/view?usp=drive_link", type: "content" },
          { label: "Module 2 - Answer Key", href: "https://docs.google.com/document/d/1wlH0J2xnumQ8NVMiHczbIRgwXyyxOyp0/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 3 - Front Page", href: "https://drive.google.com/file/d/1XJF3GaTOWLsHlBlwn3HabRVYJ8LJ3jW0/view?usp=drive_link", type: "front" },
          { label: "Module 3 - Content", href: "https://drive.google.com/file/d/1ZL6UzVvhI4Yc7klx0Ee2UzRLKpecLotV/view?usp=drive_link", type: "content" },
          { label: "Module 3 - Answer Key", href: "https://docs.google.com/document/d/1s-_uDhl2aX1xRfY6jflePygl7FvYUkra/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 4 - Front Page", href: "https://drive.google.com/file/d/1Ew0AKO2lKpngwdmqJHtwQ11z87z0R1Kl/view?usp=drive_link", type: "front" },
          { label: "Module 4 - Content", href: "https://drive.google.com/file/d/1PDOdNoCcaqvaeU75UPVsCnJTFA484jFg/view?usp=drive_link", type: "content" },
          { label: "Module 4 - Answer Key", href: "https://docs.google.com/document/d/1OxkOdvQnN8qLXFBX6W23g07xvfvqQZS2/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 5 - Front Page", href: "https://drive.google.com/file/d/1Q0_b3NmkrPUExRDWRR3R5qrUTctklvrT/view?usp=drive_link", type: "front" },
          { label: "Module 5 - Content", href: "https://drive.google.com/file/d/17w8l-DtpPOebFfBY6juvM86IK8GbccOP/view?usp=drive_link", type: "content" },
          { label: "Module 5 - Answer Key", href: "https://docs.google.com/document/d/1joroaC2Y8N9Vu3bMlACLThtEn_t7Ylq3/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 6 - Prelim Exam", href: "https://drive.google.com/file/d/1rVf3YmBdiKbfTalzoh27Pp3ZRV_b5YXZ/view?usp=drive_link", type: "exam" },
        ],
      },
      {
        title: "Midterm Modules (7-12)",
        links: [
          { label: "Module 7 - Front Page", href: "https://drive.google.com/file/d/1oW2D3uT_8g3pJ-Se8cFOgzKwbGmmy-Mv/view?usp=drive_link", type: "front" },
          { label: "Module 7 - Content", href: "https://drive.google.com/file/d/1VOxLmP295NplIWoVe3BKeIgwZKPNe_fm/view?usp=drive_link", type: "content" },
          { label: "Module 7 - Answer Key", href: "https://docs.google.com/document/d/1KxXhTAIS-XHX8yv33cRmo7F7sQZco9ib/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Activity 3 - Answer Key", href: "https://docs.google.com/document/d/1W9OB1Hv17go5BacB3QpOwiREW_q1nK4R/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 8 - Front Page", href: "https://drive.google.com/file/d/1Ldn7BOiCgd3Vl7aMIJj_dDM4C8_6a0Y_/view?usp=drive_link", type: "front" },
          { label: "Module 8 - Content", href: "https://drive.google.com/file/d/1RJFY5H2jNWBkbZ5367jF0jMjMSga4YeI/view?usp=drive_link", type: "content" },
          { label: "Module 8 - Answer Key", href: "https://docs.google.com/document/d/1z7q5a9yUzkZrlDvOoKFFL8vIIucVtmZt/edit?usp=drive_link&ouid=113325285993240770752&rtpof=true&sd=true", type: "key" },
          { label: "Module 9 - Front Page", href: "https://drive.google.com/file/d/1N40zNrTcNQKtoR9gKsoAgX4gdaQXRSx7/view?usp=drive_link", type: "front" },
          { label: "Module 9 - Content", href: "https://drive.google.com/file/d/1Q9YKlbkCSumLchAhaY0k3DHXqwWm-clv/view?usp=drive_link", type: "content" },
          { label: "Module 9 - Answer Key", href: "https://drive.google.com/file/d/1WiskeJh_dv515APyVVEZCumq4u425Lqx/view?usp=drive_link", type: "key" },
          { label: "Module 10 - Front Page", href: "https://drive.google.com/file/d/18aQi6NmsychZC2iTy_Agm6q3EeyrkdRf/view?usp=drive_link", type: "front" },
          { label: "Module 10 - Content", href: "https://drive.google.com/file/d/1mbEXg7UR5BplcVn0RQg11D383oYMXbFL/view?usp=drive_link", type: "content" },
          { label: "Module 10 - Answer Key", href: "https://drive.google.com/file/d/1mq2AwtRQjpJrSR6fXoK96eFyPgrEi2PG/view?usp=drive_link", type: "key" },
          { label: "Module 11 - Front Page", href: "https://drive.google.com/file/d/12Un_Hnae4Yl80G7d-BEokk0eoB7BIHai/view?usp=drive_link", type: "front" },
          { label: "Module 11 - Content", href: "https://drive.google.com/file/d/1v3kd9jfFEp9-W2PciufF5TH4IKNKKDPP/view?usp=drive_link", type: "content" },
          { label: "Module 11 - Answer Key", href: "https://drive.google.com/file/d/1ccJtHGSMHz2xwqs3MsiMHENGXg4kjVdz/view?usp=drive_link", type: "key" },
          { label: "Module 12 - Midterm Exam", href: "https://drive.google.com/file/d/1d_sz_QSDsQtNxDzZsrFuBSr_pzQQwlWJ/view?usp=drive_link", type: "exam" },
        ],
      },
      {
        title: "Final Modules (13-18)",
        links: [
          { label: "Module 13 - Front Page", href: "https://drive.google.com/file/d/13FTKz0K4PPqCgnhFWZ30NihsN5YoHxUC/view?usp=drive_link", type: "front" },
          { label: "Module 13 - Content", href: "https://drive.google.com/file/d/1fjDyTGa8qojQLQyXD-l7yIScsygLnduv/view?usp=drive_link", type: "content" },
          { label: "Module 13 - Answer Key", href: "https://drive.google.com/file/d/1rcRCi5fo7Tb3BFGUaXscmTcsk2Us9550/view?usp=drive_link", type: "key" },
          { label: "Module 14 - Front Page", href: "https://drive.google.com/file/d/1cNhrWHCP2zeZggwTxqdfdScdXqyeWQ1P/view?usp=drive_link", type: "front" },
          { label: "Module 14 - Content", href: "https://drive.google.com/file/d/1CUjuuLP5s_lC3DayVPFw9MAAUb0x-nRd/view?usp=drive_link", type: "content" },
          { label: "Module 14 - Answer Key", href: "https://drive.google.com/file/d/1TvfBTOcuX9nG2I1kv7gGCQG4ojMr8JnC/view?usp=drive_link", type: "key" },
          { label: "Module 15 - Front Page", href: "https://drive.google.com/file/d/1vn7ygrlwDiwvnzL6tfiZMetSPtmJrvu2/view?usp=drive_link", type: "front" },
          { label: "Module 15 - Content", href: "https://drive.google.com/file/d/1q8xbW45EzEONoj4n8cKWeIKg32XImW46/view?usp=drive_link", type: "content" },
          { label: "Module 15 - Answer Key", href: "https://drive.google.com/file/d/1FNLA-putwOZVL12XGz8Rr1O8l27GCJZb/view?usp=drive_link", type: "key" },
          { label: "Module 16 - Front Page", href: "https://drive.google.com/file/d/10Ti3gB7qMuxHlC1oBt8bzoQ-zEZ4P_7w/view?usp=drive_link", type: "front" },
          { label: "Module 16 - Content", href: "https://drive.google.com/file/d/1BocZyg3gVgoUmepFxe8DUT4NnnAbQTFx/view?usp=drive_link", type: "content" },
          { label: "Module 16 - Answer Key", href: "https://drive.google.com/file/d/1lP2kH8kIF9-JPBCF9iloEnMjjS4ls_AF/view?usp=drive_link", type: "key" },
          { label: "Module 17 - Front Page", href: "https://drive.google.com/file/d/1IgXDIqNTFLLQj4xuvNPNS2QPlPPNhZO6/view?usp=drive_link", type: "front" },
          { label: "Module 17 - Content", href: "https://drive.google.com/file/d/1m5sDIech0TNzeq49RY72wsRimSpKEHFL/view?usp=drive_link", type: "content" },
          { label: "Module 17 - Answer Key", href: "https://drive.google.com/file/d/1NgNVC9iDJoNQ0L9tMpm5bQjsZex-IM-5/view?usp=drive_link", type: "key" },
          { label: "Module 18 - Final Exam", href: "https://drive.google.com/file/d/17-Oy_hKIc6DPMLyhaNQfgaspGNo44xG9/view?usp=drive_link", type: "exam" },
        ],
      },
    ],
    tags: ["Speech & Stage Arts", "Dramatic Arts", "Performance Education", "Communication Skills", "Theater Arts", "Public Speaking"],
  },
]
