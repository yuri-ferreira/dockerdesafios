FROM python:3.9-slim

RUN useradd -m yuri

WORKDIR /app

COPY requirements.txt . 

RUN pip install --no-cache-dir -r requirements.txt

USER yuri

COPY . . 

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]