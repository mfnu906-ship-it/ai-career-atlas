# Planned portfolio case study: Broadridge data insights

**Status:** Planned — not yet built, tested, or verified.  
**Research connection:** Broadridge — Summer 2027 Business Internship Program (JR1085772).  
**Related research:** [New Jersey internship research: IT and fintech business roles](/research/2027-internship-role-research).

## Why this project is relevant

The Broadridge employer description identifies exposure to Excel, Power BI, Tableau, or SQL and the ability to interpret data, identify trends, and communicate business insights. This project plan turns that employer finding into a small piece of portfolio work. It does not claim that I already have these skills at a professional level.

**Original employer source:** [Broadridge — Summer 2027 Business Internship Program](https://broadridge.wd5.myworkdayjobs.com/en-US/Careers/job/Broadridge-Summer-2027-Business-Internship-Program_JR1085772).

## Project question

Use a small, non-sensitive sample dataset to answer one practical business question, such as:

> Which request categories have the highest volume, and how does that volume change over time?

The exact question and fields will be confirmed after selecting a suitable dataset. I will not use private customer, employee, or company data.

## One-week work plan

1. **Choose and describe the data.** Select a public or synthetic dataset. Record its source, date accessed, row count, available fields, and any limitations.
2. **Define the business question.** Write one or two sentences explaining who could use the information and what decision it may support.
3. **Prepare the data.** Check missing values, duplicate records, inconsistent category labels, and date formats. Record any cleaning decisions rather than silently removing information.
4. **Analyze the data.** Write at least five SQL queries, using fields that actually exist in the selected dataset. Include a count or total, a category comparison, and a time-based comparison when the available data supports them.
5. **Communicate one finding.** Create one simple chart, dashboard, or summary table and write a short explanation of one finding and its possible business implication.

## Expected portfolio deliverables

- A short README describing the question, data source, dataset limitations, and method
- A data dictionary or brief description of the fields used
- A SQL file containing at least five queries
- One chart, dashboard, or summary table
- A short written finding that distinguishes what the data shows from what I infer

## Verification checklist

### Review that can happen now, before the project is built

A peer reviewer can verify the research-to-plan connection without waiting for the dataset or dashboard:

1. Open the original Broadridge posting and find its statements about exposure to Excel, Power BI, Tableau, or SQL and interpreting data into business insights.
2. Return to the [internship research page](/research/2027-internship-role-research) and locate the Broadridge finding.
3. Follow the case-study plan link and confirm that the planned SQL analysis, summary visual, and written finding respond to that requirement.
4. Check that the project is labeled **Planned**, not completed, and that the expected deliverables and checks are stated.

**Pre-build review result:** Pending — record the result only after a reviewer completes this check.

### Review after the project is built

- Re-run one SQL query and confirm that its result matches the value shown in the chart or summary.
- Reconcile the total number of analyzed records with the cleaned dataset and explain exclusions or missing values.
- Ask a reviewer to reproduce one reported metric from the source data and note whether the result matches.
- Record any mismatch, correction, commit, and reviewer retry before marking the related GitHub issue resolved.

**Build verification result:** Pending — no query, chart, or reviewer result is claimed yet.

## Next step

Within one week, choose the sample dataset, document the business question and its fields, and write the first five SQL queries. Save the query results and expected outputs so they can be checked. After that, build the simple visual and document one finding.

## AI assistance

AI may help explain SQL syntax or review the clarity of the written explanation. The data source, query outputs, cleaning decisions, and final interpretation must be checked by me. Any AI assistance used in the finished artifact will be disclosed.
